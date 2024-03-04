import { AnswerIconBtn, DeclineIconBtn, DraggableCall } from '../../../components/common';
import videoRingtone from '../../../assets/audios/videoRingtone.mp3';

const IncomingVideoCallUi = (props) =>
{
    const {
        myMedia,
        answerCall,
        declineCall,
        call,
    } = props;

    return (
        <div>
            <DraggableCall
                type="video"
                call={call}
                secondaryText="Incoming video call..."
                video={myMedia}
                actions={
                    <>
                        <DeclineIconBtn onClick={declineCall} />
                        <AnswerIconBtn onClick={answerCall} />
                    </>
                }
            />
            {/* Automatic play Ringtone  */}
            <audio src={videoRingtone} autoPlay loop />
        </div>
    )
}

export default IncomingVideoCallUi