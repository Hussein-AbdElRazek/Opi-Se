import React, { useState, useRef, useEffect, useCallback } from "react";
import Peer from "simple-peer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import baseSocket from "../sockets/baseConnection";


const VideoContext = React.createContext();

// get socket
const socket = baseSocket;

export const VideoContextProvider = (props) =>
{
    // call state
    const [stream, setStream] = useState(null)
    //console.log("JSON.parse(localStorage.getItem", JSON.parse(localStorage.getItem("call")));
    const [call, setCall] = useState( null);
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");

    // call ref
    const myVideo = useRef();
    const anotherVideo = useRef();
    const connectionRef = useRef();

    const navigate = useNavigate();

    // my data from store
    const myData = useSelector(state => state.auth.userData);

    const { enqueueSnackbar: popMessage } = useSnackbar();

    const navigateHome = useCallback(() => { navigate('/') }, [navigate]);

    const destroyConnectionRef = useCallback(() =>
    {
        try
        {
            //console.log("connectionRef", connectionRef)
            if (connectionRef?.current && !connectionRef.current.isDestroying)
            {
                connectionRef.current.destroy();
                connectionRef.current = null;
                window.location.reload();
            }
        } catch (error)
        {
            //console.error(error)
        }
    }, [])

    const stopStream = useCallback(() =>
    {
        try
        {
            if (stream && stream.getTracks)
            {
                stream.getTracks().forEach(track => track.stop());
                if (myVideo.current) myVideo.current = null;
                window.location.reload();
            }
        } catch (error)
        {
            //console.error(error)
        }
    }, [stream])

    const disconnectCall = useCallback(() =>
    {
        try
        {
            socket.emit("disconnectCall", {}, (res) =>
            {
                //console.log('disconnect', res)
                stopStream();

            })

            setCallEnded(true);
            setCall(null);
            localStorage.removeItem("call")
            navigateHome();
        } catch (error)
        {
            setCallEnded(false)
            popMessage(error.message, { variant: "error" })
        }
    }, [navigateHome, popMessage, stopStream])

    const leaveCall = useCallback(() =>
    {
        try
        {

            disconnectCall();
        } catch (error)
        {
            setCallEnded(false)
            popMessage(error.message, { variant: "error" })
        }
    }, [disconnectCall, popMessage])

    const declineCall = useCallback(() =>
    {
        setCall(null)
        localStorage.removeItem("call")
        leaveCall();
        stopStream();

    }, [leaveCall, stopStream])

    useEffect(() =>
    {
        // //console.log("listening to on accepted")
        // socket.on('callAccepted', (res) =>
        // {
        //     //console.log("//////// On callAccepted ", res)
        //     setCallAccepted(true);

        // })
    }, [])

    // listen to incoming calls
    useEffect(() =>
    {
        try
        {

            socket.on("callEnded", () =>
            {
                //console.log("callEnded...  _____________",)
                setCallEnded(true);
                setCall(null);
                localStorage.removeItem("call")

                navigateHome();
                stopStream();


            })
        } catch (error)
        {
            setCall(null)
            localStorage.removeItem("call")

            popMessage(error.message, { variant: "error" })
        }

    }, [call, navigateHome, popMessage, stopStream])

    useEffect(() =>
    {
        //console.log("!call && !call.busy", !(call?.busy))
        //console.log("call", call)
        if (!(call?.busy)) 
        {
            socket.on("callUser", (incomingCall) =>
            {
                //console.log("callUser...", incomingCall)
                const { from, name: callerName, profileImage, signalData } = incomingCall;
                //console.log("0000000000000000000the fucken case", call)
                //console.log("0000000000000000000the fucken case condition", !(call?.busy))

                if (!(call?.busy))
                {
                    setCall({ isReceivingCall: true, from, name: callerName, profileImage: profileImage, signalData })
                    localStorage.setItem("call", JSON.stringify({ isReceivingCall: true, from, name: callerName, profileImage: profileImage, signalData }))

                }
            })
        }
    }, [])
    // useEffect(() =>
    // {
    //     const peer = new Peer({
    //         initiator: true,
    //         trickle: false,
    //         stream
    //     })
    //     socket.on('callAccepted', (signal) =>
    //     {
    //         //console.log("callAccepted________________")
    //         setCallAccepted(true);

    //         peer.signal(signal)
    //     })
    //     connectionRef.current = peer;
    // }, [stream])

    // pop message when call ended 
    useEffect(() =>
    {
        if (callEnded)
        {
            popMessage("Call ended.", { variant: "info" })
            setCallEnded(false)
        }
    }, [callEnded, popMessage])
    // useEffect(() =>
    // {
    //     //console.log("useEffect__-_-_--___")
    //     if (stream && myVideo.current) myVideo.current.srcObject = stream;
    // }, [stream])
    const establishStream = useCallback(async () =>
    {
        try
        {
            const temp = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setStream(temp);
            //console.log("update my video")
            if (myVideo.current) myVideo.current.srcObject = temp;
        } catch (error)
        {
            if (error.name === "NotAllowedError")
            {
                //TODO Handle permission denial gracefully
                //console.error("Video/audio permissions not granted.");
                // Display a user-friendly message and offer retry options
            } else
            {
                //console.error("Other error:", error);
            }
        }
    }, [])

    const callUser = (id, getResponse) =>
    {
        //console.log("calling...", id)
        try
        {
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
                    from: myData._id,
                    name: myData?.userName,
                    profileImage: myData?.profileImage,
                }
                //console.log("call", call)
                //console.log("!(call?.busy)", !(call?.busy))
                if (!(call?.busy))
                {
                    //console.log("7777777i call")

                    socket.emit("callUser", body, ({ success, message }) =>
                    {
                        if (success)
                        {
                            setCall({ from: myData._id, })
                            localStorage.setItem("call", JSON.stringify({ from: myData._id, }))

                            establishStream();
                            navigate("/video");
                        }
                        else throw new Error(message || "Something went wrong")
                    })
                }
            })

            peer.on("stream", (currentStream) =>
            {
                anotherVideo.current.srcObject = currentStream;
                //console.log("*******callUser stream", currentStream)
            })

            socket.on('callAccepted', (res) =>
            {
                //console.log("callAccepted------------------", res)
                setCallAccepted(true);
                setCall(prev => ({ ...prev, isReceivingCall: false, busy: true }))
                localStorage.setItem("call", JSON.stringify({ ...call, isReceivingCall: false, busy: true }))

                peer.signal(res.signal)
            })
            connectionRef.current = peer;

        } catch (error)
        {
            setCallAccepted(false);
            popMessage(error, { variant: "error" })
        }
    }

    const answerCall = () =>
    {
        try
        {
            establishStream();
            setCall(prev => ({ ...prev, isReceivingCall: false, busy: true }))
            localStorage.setItem("call", JSON.stringify({ ...call, isReceivingCall: false, busy: true }))
            setCallAccepted(true);
            const peer = new Peer({
                initiator: false,
                trickle: false,
                stream
            })
            // if (callAccepted) return;
            peer.on('signal', (data) =>
            {
                const body = {
                    signal: data,
                    to: call.from
                }
                //console.log("body for answerCall", body)

                socket.emit("answerCall", body, (res) =>
                {
                    //console.log('answerCall--------------', res)

                    navigate("/video")
                })
            })

            peer.on("stream", (currentStream) =>
            {
                //console.log("--on another stream",)
                // if (anotherVideo.current)
                // {
                //console.log("******--on another stream assign", currentStream)
                anotherVideo.current.srcObject = currentStream;
                // }
            })
            //console.log("call ", call)
            peer.signal(call.signalData)
            connectionRef.current = peer;
        } catch (error)
        {
            setCallAccepted(false);
            popMessage(error.message, { variant: "error" })
        }

    }

    // test listen to call accepted

    useEffect(() =>
    {

    }, [])

    //console.log("my video", myVideo)
    //console.log("user video", anotherVideo)


    const contextValue = {
        call,
        callEnded,
        callAccepted,
        myVideo,
        anotherVideo,
        stream,
        name,
        setName,
        callUser,
        answerCall,
        declineCall,
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