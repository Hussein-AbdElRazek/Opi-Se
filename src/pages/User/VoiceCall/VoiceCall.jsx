import React, { useContext, useEffect, useState } from 'react'
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
    } = useContext(CallContext);

    // establish stream (take permission & get video, audio)
    const handleAnswer = () =>
    {

        setCall(prev => ({ ...prev, isReceivingCall: false }))
        setIsAnswer(true)
    }

    useEffect(() =>
    {
        establishStream("voice");
    }, [establishStream])
    useEffect(() =>
    {
        if (callAccepted && !callEnded) setCallStarted(true)
    }, [callAccepted, callEnded])
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
        />
    )
}

export default VoiceCall