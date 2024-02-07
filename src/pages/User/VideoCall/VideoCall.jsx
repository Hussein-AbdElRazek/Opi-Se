import React, { useContext, useEffect } from 'react'
import VideoCallUi from './VideoCallUi'
import { useDispatch, useSelector } from 'react-redux';
import VideoContext from '../../../videoCallStore/video-call-context';
import { chatActions } from '../../../store/chat-slice';
import { useNavigate } from 'react-router-dom';

const VideoCall = () =>
{

    const dispatch = useDispatch();

    const { call, callAccepted, myVideo, anotherVideo, stream, callEnded, leaveCall, establishStream } = useContext(VideoContext);

    // my data from store
    const myData = useSelector(state => state.auth.userData);
    const navigate = useNavigate()
    useEffect(() =>
    {
        console.log("call", call)
        if (!call) navigate("/");
        // establishStream();
    }, [call, navigate, establishStream])
    return (
        <VideoCallUi
            call={call}
            myVideo={myVideo}
            anotherVideo={anotherVideo}
            stream={stream}
            callAccepted={callAccepted}
            callEnded={callEnded}
            myData={myData}
            leaveCall={leaveCall}
        />
    )
}

export default VideoCall