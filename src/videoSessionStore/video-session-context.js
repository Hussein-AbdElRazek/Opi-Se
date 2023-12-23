import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { useNavigate } from "react-router-dom";

const VideoContext = React.createContext()

const socket = io("https://graduation-project-j6gl.onrender.com")

export const VideoContextProvider = (props) =>
{
    const [stream, setStream] = useState(null)
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const [me, setMe] = useState("");


    const myVideo = useRef();
    const anotherVideo = useRef();
    const connectionRef = useRef();

    const navigate = useNavigate();
    useEffect(() =>
    {
        // navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) =>
        // {
        //     setStream(currentStream)
        //     myVideo.current.srcObject = currentStream
        // })
        // socket.on('me', (id) => setMe(id));
        // socket.on("callUser", ({ from, name: callerName, signal }) =>
        // {
        //     console.log("callUser...")
        //     setCall({ isReceivedCall: true, from, name: callerName, signal })
        // })

    }, [])

    const establishStream = () =>
    {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) =>
        {
            setStream(currentStream)
            myVideo.current.srcObject = currentStream
        })
    }

    const callUser = (id, getResponse) =>
    {
        console.log("calling...", id)
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream
        })

        peer.on('signal', (data) =>
        {
            const body = {
                userToCall: id,
                signalData: data,
                from: me,
                name: "name"
            }
            socket.emit("callUser", body, (res) =>
            {
                console.log('callUser', res)
                // getResponse(res)
            })
        })

        peer.on("stream", (currentStream) =>
        {
            anotherVideo.current.srcObject = currentStream;
            console.log("callUser stream")
        })

        socket.on('callAccepted ', (signal) =>
        {
            setCallAccepted(true);

            peer.signal(signal)
        })
        connectionRef.current = peer;

    }
    const answerCall = (body, getResponse) =>
    {
        setCallAccepted(true);

        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream
        })

        peer.on('signal', (data) =>
        {
            const body = {
                signal: data,
                to: call.from
            }
            socket.emit("answerCall", body, (res) =>
            {
                console.log('answerCall', res)
                // getResponse(res)
            })
        })

        peer.on("stream", (currentStream) =>
        {
            anotherVideo.current.srcObject = currentStream;
        })

        peer.signal(call.signal)

        connectionRef.current = peer;
    }

    const leaveCall = (body, getResponse) =>
    {
        setCallEnded(true)

        connectionRef.current.destroy();

        navigate("/")
        socket.emit("disconnect", body, (res) =>
        {
            console.log('disconnect', res)
            getResponse(res)
        })
    }


    const contextValue = {
        call,
        callEnded,
        callAccepted,
        myVideo,
        anotherVideo,
        stream,
        name,
        setName,
        me,
        callUser,
        answerCall,
        leaveCall,
        establishStream,
    }

    return (
        <VideoContext.Provider value={contextValue}>
            {props.children}
        </VideoContext.Provider>
    )
}

export default VideoContext;