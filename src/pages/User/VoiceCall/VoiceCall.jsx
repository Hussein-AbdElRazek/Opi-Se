import React, { useContext, useEffect, useState } from 'react'
import { useSnackbar } from "notistack";

import VoiceCallUi from './VoiceCallUi'
import useTimer from '../../../hooks/use-timer'
import CallContext from '../../../callStore/call-context';

const VoiceCall = () =>
{
    const [callStarted, setCallStarted] = useState(false)
    const { formattedTime } = useTimer(callStarted);
    const { setIsAnswer,
        declineCall,
        call,
        myMedia,
        anotherMedia,
        establishStream,
        stream,
        anotherStream,
        setCall,
        leaveCall,
        callAccepted,
        callEnded,
        toggleMedia,
        isMyMicOn,
    } = useContext(CallContext);
    const { enqueueSnackbar: popMessage } = useSnackbar();

    // establish stream (take permission & get video, audio)
    const handleAnswer = () =>
    {
        // in case no stream
        if (!stream)
        {
            popMessage("Allow/mic permission first to can answer call")
            return
        }
        setCall(prev => ({ ...prev, isReceivingCall: false }))
        setIsAnswer(true)
    }

    // establishStream
    useEffect(() =>
    {
        if (!stream && call?.isReceivingCall)
        {
            establishStream("voice");
        }
    }, [call?.isReceivingCall, establishStream, stream])

    // begin call
    useEffect(() =>
    {
        if (callAccepted && !callEnded) setCallStarted(true)
    }, [callAccepted, callEnded])

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

    return (
        <VoiceCallUi
            formattedTime={formattedTime}
            call={call}
            answerCall={handleAnswer}
            declineCall={declineCall}
            callAccepted={callAccepted}
            callEnded={callEnded}
            leaveCall={leaveCall}
            stream={stream}
            anotherStream={anotherStream}
            myMedia={myMedia}
            anotherMedia={anotherMedia}
            toggleMedia={toggleMedia}
            isMyMicOn={isMyMicOn}
        />
    )
}

export default VoiceCall