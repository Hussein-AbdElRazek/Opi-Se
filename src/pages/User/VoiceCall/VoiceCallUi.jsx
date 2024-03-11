import { IconButton } from '@mui/material';

import { DraggableCall } from '../../../components/common/DraggableCall'
import { AnswerIconBtn, DeclineIconBtn, Video } from '../../../components/common'
import { ReactComponent as MicIcon } from '../../../assets/icons/mic.svg';
import { ReactComponent as MutedMicIcon } from '../../../assets/icons/mutedMic.svg';
import videoRingtone from '../../../assets/audios/videoRingtone.mp3';
import classes from '../VideoCall/VideoCall.module.css'

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
        anotherStream,
        toggleMedia,
        isMyMicOn,
    } = props;

    const RenderIncomingActions = () => (
        <>
            <DeclineIconBtn onClick={declineCall} />
            <AnswerIconBtn onClick={answerCall} />
        </>
    )

    const RenderRingingActions = () => (
        <>
            <IconButton
                className={`${classes.icon} ${classes.iconMic} ${!isMyMicOn ? classes.iconMuted : ""}`}
                onClick={() => toggleMedia("audio")}
            >
                {isMyMicOn ? (<MicIcon />) : (<MutedMicIcon />)}
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
                isReceivingCall={call?.isReceivingCall}
            />

            {/* My video */}
            <div
                style={{ display: "none" }}
            >
                <Video
                    muted={true}
                    videoRef={myMedia}
                />
            </div>
            {/* Another Person video */}
            {(anotherStream || (callAccepted && !callEnded)) && (
                <div
                    style={{ display: "none" }}
                >
                    <Video
                        videoRef={anotherMedia}
                    />
                </div>
            )}

            {/* Automatic play Ringtone  */}
            {call?.isReceivingCall && <audio src={videoRingtone} autoPlay loop />}
        </div>
    )
}

export default VoiceCallUi