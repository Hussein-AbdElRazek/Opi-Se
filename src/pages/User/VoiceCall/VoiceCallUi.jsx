import React from 'react'
import { DraggableCall } from '../../../components/common/DraggableCall'
import { AnswerIconBtn, DeclineIconBtn, Video } from '../../../components/common'
import { IconButton } from '@mui/material';
import { ReactComponent as MicrophoneIcon } from '../../../assets/icons/microphone.svg'
import { ReactComponent as SpeakerIcon } from '../../../assets/icons/speaker.svg'
import videoRingtone from '../../../assets/audios/videoRingtone.mp3';

const VoiceCallUi = (props) =>
{
    const {
        formattedTime,
        call,
        answerCall,
        declineCall,
        callAccepted,
        callEnded,
        leaveCall,
        myMedia,
        anotherMedia,
        stream,
        anotherStream,
    } = props;

    const RenderIncomingActions = () => (
        <>
            <DeclineIconBtn onClick={declineCall} />
            <AnswerIconBtn onClick={answerCall} />
        </>
    )
    const RenderRingingActions = () => (
        <>
            <IconButton>
                <MicrophoneIcon />
            </IconButton>
            <IconButton>
                <SpeakerIcon />
            </IconButton>
            <DeclineIconBtn onClick={leaveCall} />
        </>
    )
    const RenderCallAction = () =>
    {
        if (call?.isReceivingCall)
        {
            return (<RenderIncomingActions />)
        }
        else if (!call?.isReceivingCall)
        {
            return (<RenderRingingActions />)
        }
        else
        {
            return (<></>)
        }
    }
    const RenderSecondaryText = () =>
    {
        if (!call?.isReceivingCall && !callAccepted && !callEnded && !call?.busy)
        {
            return ("Loading...")
        } else if (call?.isReceivingCall)
        {
            return ("Incoming Voice Call...")
        } else if (call?.busy && callAccepted && !callEnded)
        {
            return (formattedTime)
        }
        else if (call?.busy && !callAccepted && !callEnded)
        {
            return ("Ringing...")
        }
    }
    return (
        <div>
            <DraggableCall
                type="voice"
                call={call}
                secondaryText={RenderSecondaryText()}
                actions={<RenderCallAction />}
            />
            {/* Automatic play Ringtone  */}
            {/* My video */}
            <div >
                {stream && (
                    <div
                        style={{ display: "none" }}
                    >
                        <Video
                            muted={true}
                            videoRef={myMedia}
                        // profileImage={myData.profileImage}
                        // userName={myData.userName}
                        />
                    </div>
                )}
            </div>
            {/* Another Person video */}
            {(anotherStream || (callAccepted && !callEnded)) && (
                <div
                    style={{ display: "none" }}
                >
                    <Video
                        videoRef={anotherMedia}
                        profileImage={call?.profileImage}
                        userName={call?.userName}
                    />
                </div>

            )}

            {/* Automatic play Ringtone  */}
            {call?.isReceivingCall && <audio src={videoRingtone} autoPlay loop />}
        </div>
    )
}

export default VoiceCallUi