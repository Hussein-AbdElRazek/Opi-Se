import React, { useContext, useEffect, useState } from 'react'
import VideoCallUi from './VideoCallUi'
import { useSelector } from 'react-redux';
import CallContext from '../../../callStore/call-context';
import { useNavigate } from 'react-router-dom';
import useTimer from '../../../hooks/use-timer';

const VideoCall = () =>
{

    const { call, callAccepted, myMedia, anotherMedia, stream, callEnded, leaveCall, anotherStream, toggleMedia } = useContext(CallContext);

    // my data from store
    const myData = useSelector(state => state.auth.userData);
    const navigate = useNavigate()
    const [callStarted, setCallStarted] = useState(false)
    const { formattedTime } = useTimer(callStarted);

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

    // for start call timer
    useEffect(() =>
    {
        if (callAccepted && !callEnded) setCallStarted(true)
    }, [callAccepted, callEnded])

    // if no call navigate home
    useEffect(() =>
    {
        if (!call) navigate("/")
    }, [call, navigate])
    return (
        <VideoCallUi
            call={call}
            myVideo={myMedia}
            anotherVideo={anotherMedia}
            stream={stream}
            anotherStream={anotherStream}
            callAccepted={callAccepted}
            callEnded={callEnded}
            myData={myData}
            leaveCall={leaveCall}
            toggleMedia={toggleMedia}
            formattedTime={formattedTime}
        />
    )
}

export default VideoCall