import React, { useContext, useEffect } from 'react'
import IncomingVideoCallUi from './IncomingVideoCallUi'
import VideoContext from '../../../videoCallStore/video-call-context';

const IncomingVideoCall = () =>
{
    const { answerCall, declineCall, call, myVideo, establishStream, stream } = useContext(VideoContext);

    // establish stream (take permission & get video, audio)
    useEffect(() =>
    {
        establishStream();
    }, [establishStream])
    
    return (
        <IncomingVideoCallUi
            myVideo={myVideo}
            answerCall={answerCall}
            declineCall={declineCall}
            call={call}
            stream={stream}
        />
    )
}

export default IncomingVideoCall