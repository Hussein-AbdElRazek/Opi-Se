import Draggable from 'react-draggable';

import { HeaderText, ProfilePic } from '../../../components/ui';
import classes from './styles/IncomingVideoCall.module.css'
import { AnswerIconBtn, DeclineIconBtn, Video } from '../../../components/common';
import videoRingtone from '../../../assets/audios/videoRingtone.mp3';
const IncomingVideoCallUi = (props) =>
{
    const {
        myVideo,
        answerCall,
        declineCall,
        call,
        stream,
    } = props;

    // handle default position
    const rootElement = document.body;
    const componentWidth = 350;
    const calculatedX = rootElement.offsetWidth - componentWidth;
    const xPos = calculatedX >= 0 ? calculatedX :
        10;    // to handle case if  screen smaller than component default width
    const defaultPosition = {
        x: xPos,
        y: 0,
    };

    return (
        <Draggable bounds={"html"} defaultPosition={defaultPosition}  >
            <div
                className={classes.container}
            >
                <div className={classes.content}>
                    <div
                        className={`${classes.profilePic} ${classes.marginTop}`}
                    >
                        <ProfilePic
                            profileImage={call?.profileImage}
                            userName={call?.userName}
                        />
                    </div>
                    <HeaderText>
                        {call?.name}
                    </HeaderText>
                    <span>
                        Incoming Video Call...
                    </span>
                    {true && (
                        <div className={`${classes.marginTop} ${classes.videoContainer}`}>
                            <Video
                                videoRef={myVideo}
                                muted={true}
                            />
                        </div>
                    )}

                    <div
                        className={`${classes.action}  ${classes.marginTop}`}
                    >
                        <DeclineIconBtn onClick={declineCall} />
                        <AnswerIconBtn onClick={answerCall} />
                    </div>

                </div>

                {/* Automatic play Video Ringtone  */}
                <audio src={videoRingtone} autoPlay loop />
            </div>

        </Draggable>

    )
}

export default IncomingVideoCallUi