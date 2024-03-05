import React, { useState, useRef, useEffect, useCallback } from "react";
import Peer from "simple-peer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import baseSocket from "../sockets/baseConnection";

const CallContext = React.createContext();

// get socket
const socket = baseSocket;

export const CallContextProvider = (props) =>
{
    // call state
    const [stream, setStream] = useState(null)
    const [call, setCall] = useState(null);
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(localStorage.getItem("callEnded") ? JSON.parse(localStorage.getItem("callEnded")) : false);
    const [callerId, setCallerId] = useState(null);
    const [isAnswer, setIsAnswer] = useState(false);
    const [name, setName] = useState("");
    const [anotherStream, setAnotherStream] = useState(null);

    // call refs
    const myMedia = useRef();
    const anotherMedia = useRef();
    const connectionRef = useRef();

    const navigate = useNavigate();

    // my data from store
    const myData = useSelector(state => state.auth.userData);

    const { enqueueSnackbar: popMessage } = useSnackbar();

    const establishStream = useCallback(async (callType) =>
    {
        setCall((prev) => ({ ...prev, callType }))
        let tempStream;
        try
        {
            tempStream = await navigator.mediaDevices.getUserMedia({ video: callType === "video", audio: true });
            console.log("current stream", stream);
            if (!stream)
            {
                console.log("set stream...")
                setStream(tempStream);
            }

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
        return tempStream;
    }, [stream])

    // update my video when stream
    useEffect(() =>
    {
        if (stream && myMedia.current) myMedia.current.srcObject = stream;
    }, [stream, myMedia])

    const stopStream = useCallback(() =>
    {
        try
        {
            if (stream && stream.getTracks)
            {
                stream.getTracks().forEach(track => track.stop());
                if (myMedia?.current) myMedia.current = null;
                setStream(null)
            }
            if (anotherStream && anotherStream.getTracks)
            {
                anotherStream.getTracks().forEach(track => track.stop());
                if (anotherMedia?.current) anotherMedia.current = null;
                setAnotherStream(null)
            }
        } catch (error)
        {
            //console.error(error)
        }
    }, [anotherStream, stream])

    const destroyConnectionRef = useCallback(() =>
    {
        try
        {
            if (connectionRef?.current)
            {
                setTimeout(() =>
                {
                    console.log("destroy")
                    connectionRef.current.destroy();

                    window.location.reload();
                }, 2000);
            }


        } catch (error)
        {
            console.error(error)
        }
    }, [])

    const callUser = useCallback(async (id) =>
    {
        console.log("calling...", id)
        try
        {
            const peer = new Peer({
                initiator: true,
                trickle: false,
                stream
            })
            console.log("callUser stream ", stream)
            peer.on('signal', (data) =>
            {
                const body = {
                    userToCall: id,
                    signalData: data,
                    from: myData?._id,
                    name: myData?.userName,
                    profileImage: myData?.profileImage,
                    callType: call?.callType
                }
                if (!(call?.busy) && !(call?.isReceivingCall))
                {
                    socket.emit("callUser", body, ({ success, message }) =>
                    {
                        if (success)
                        {
                            setCall(prev => ({ ...prev, from: myData?._id, name: prev.name, busy: true }))
                            // navigate("/video");
                        }
                        else throw new Error(message || "Something went wrong")
                    })
                }
            })

            peer.on("stream", (currentStream) =>
            {
                // anotherMedia.current.srcObject = currentStream;
                setAnotherStream(currentStream);
                console.log("*******callUser stream", currentStream)
            })


            socket.on('callAccepted', (res) =>
            {
                console.log("callAccepted------------------", res)
                setCallAccepted(true);
                setCall((prev) => ({ ...prev, isReceivingCall: false, busy: true }))
                peer.signal(res.signal)
            })
            peer.on('error', (err) => { console.log("peer err", err) })
            peer.on('close', (data) => { console.log("99999999999999closed", data) })
            connectionRef.current = peer;

        } catch (error)
        {
            setCallAccepted(false);
            popMessage(error, { variant: "error" })
        }
    }, [call?.busy, call?.callType, call?.isReceivingCall, myData?._id, myData?.profileImage, myData?.userName, popMessage, stream])

    // when ui setCallerId fire callUser 
    useEffect(() =>
    {
        if (stream && callerId)
        {
            callUser(callerId);
            setCallerId(null)
        }
    }, [callUser, callerId, stream])

    const answerCall = useCallback(async () =>
    {
        try
        {
            // if (callAccepted) return;
            console.log("my stream wehen answer", stream)
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

                if (call && !callAccepted)
                {

                    socket.emit("answerCall", body, (res) =>
                    {
                        console.log('answerCall--------------', res)
                        setCall((prev) => ({ ...prev, isReceivingCall: false, busy: true }))
                        setCallAccepted(true);
                    })
                }
            })

            peer.on("stream", (currentStream) =>
            {
                console.log("******--on another stream assign", currentStream)
                // if (anotherMedia?.current) anotherMedia.current.srcObject = currentStream;
                setAnotherStream(currentStream);

            })
            peer.on('close', (data) => { console.log("99999999999999closed", data) })

            peer.signal(call.signalData)
            connectionRef.current = peer;

        } catch (error)
        {
            setCallAccepted(false);
            popMessage(error.message, { variant: "error" })
        }
    }, [call, callAccepted, popMessage, stream])

    // when ui setIsAnswer fire answerCall
    useEffect(() =>
    {
        if (stream && isAnswer)
        {
            answerCall();
            setIsAnswer(false)
        }
    }, [answerCall, isAnswer, stream])

    const toggleMedia = (mediaType) =>
    {
        const mediaTrack = stream.getTracks().find(track => track.kind === mediaType);
        console.log("toggle mediaTrack", mediaTrack)

        if (mediaTrack.enabled)
        {
            mediaTrack.enabled = false
        } else
        {
            mediaTrack.enabled = true
        }
    }
    const navigateHome = useCallback(() => { navigate("/") }, [navigate]);

    const removeCallData = () =>
    {
        setCall(null)
    }

    const disconnectCall = useCallback(() =>
    {
        try
        {

            socket.emit("disconnectCall", {}, (res) =>
            {
                console.log("disconnectCall ", res)
                setCallEnded(true);
                localStorage.setItem("callEnded", JSON.stringify(true));
                removeCallData();
                stopStream();
                navigateHome();
                destroyConnectionRef();
            })

        } catch (error)
        {
            setCallEnded(false);
            localStorage.setItem("callEnded", JSON.stringify(false));
            popMessage(error.message, { variant: "error" })
        }
    }, [destroyConnectionRef, navigateHome, popMessage, stopStream])

    const leaveCall = useCallback(() =>
    {
        try
        {
            disconnectCall();
        } catch (error)
        {
            setCallEnded(false);
            localStorage.setItem("callEnded", JSON.stringify(false));
            popMessage(error.message, { variant: "error" })
        }
    }, [disconnectCall, popMessage])

    const declineCall = useCallback(() =>
    {
        removeCallData();
        leaveCall();
    }, [leaveCall])


    //  update another media when another stream
    useEffect(() =>
    {
        if (anotherStream && anotherMedia.current)
        {
            anotherMedia.current.srcObject = anotherStream;
        }
    }, [anotherStream, anotherMedia])

    //  update my media when  stream
    useEffect(() =>
    {
        if (stream && myMedia.current) myMedia.current.srcObject = stream;
    }, [stream, myMedia])

    // listeners:

    // listen to incoming calls
    useEffect(() =>
    {
        socket.on("callUser", async (incomingCall) =>
        {
            if (!(call?.busy) && !(call?.isReceivingCall) && !(callAccepted))
            {
                setCall({ isReceivingCall: true, ...incomingCall })
            }
        })
    }, [call, callAccepted])

    // listen to callEnded
    useEffect(() =>
    {
        try
        {
            if (call)
            {
                socket.on("callEnded", () =>
                {
                    if (call && !callEnded)
                    {
                        console.log("call ended.....")
                        setCallEnded(true);
                        localStorage.setItem("callEnded", JSON.stringify(true));
                        removeCallData();
                        stopStream();
                        navigateHome();
                        destroyConnectionRef();
                    }
                })
            }
        } catch (error)
        {
            removeCallData();
            popMessage(error.message, { variant: "error" })
        }
    }, [call, callEnded, destroyConnectionRef, navigateHome, popMessage, stopStream])

    // pop message when call ended 
    useEffect(() =>
    {
        if (callEnded)
        {
            setTimeout(() =>
            {
                popMessage("Call ended.", { variant: "info" })
                setCallEnded(false);
                localStorage.setItem("callEnded", JSON.stringify(false));
            }, 2000);

        }
    }, [callEnded, popMessage])

    const contextValue = {
        call,
        callEnded,
        callAccepted,
        myMedia,
        anotherMedia,
        stream,
        name,
        setName,
        callUser,
        answerCall,
        declineCall,
        leaveCall,
        establishStream,
        setCallerId,
        setIsAnswer,
        setCall,
        anotherStream,
        toggleMedia,
    }

    return (
        <CallContext.Provider value={contextValue}>{props.children}</CallContext.Provider>
    )
}

export default CallContext;