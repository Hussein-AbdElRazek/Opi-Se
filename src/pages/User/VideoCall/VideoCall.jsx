import React, { useContext, useEffect } from 'react'
import VideoCallUi from './VideoCallUi'
import { useDispatch, useSelector } from 'react-redux';
import CallContext from '../../../callStore/call-context';
import { useNavigate } from 'react-router-dom';

const VideoCall = () =>
{

    const dispatch = useDispatch();

    const { call, callAccepted, myMedia, anotherMedia, stream, callEnded, leaveCall, establishStream, anotherStream } = useContext(CallContext);
    const myPartnerId = useSelector(state => state.auth.userData.partnerId._id);

    // my data from store
    const myData = useSelector(state => state.auth.userData);
    const navigate = useNavigate()
    useEffect(() =>
    {
        establishStream("video");
    }, [establishStream])
    useEffect(() =>
    {
        if (anotherStream && anotherMedia.current)
        {
            console.log("+++video call set ANother stream ")
            anotherMedia.current.srcObject = anotherStream;
        }
    }, [anotherStream, anotherMedia])
    useEffect(() =>
    {
        if (stream && myMedia.current) myMedia.current.srcObject = stream;
    }, [stream, myMedia])
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
        />
    )
}

export default VideoCall