import { IconButton } from '@mui/material'

import classes from './VideoCall.module.css'
import { Video } from '../../../components/common';
import { HeaderText, Paragraph, ProfilePic } from '../../../components/ui';
import { ReactComponent as MicIcon } from '../../../assets/icons/mic.svg';
import { ReactComponent as MutedMicIcon } from '../../../assets/icons/mutedMic.svg';
import { ReactComponent as CameraOnIcon } from '../../../assets/icons/cameraOn.svg';
import { ReactComponent as CameraOffIcon } from '../../../assets/icons/cameraOff.svg';
import { ReactComponent as EndCallIcon } from '../../../assets/icons/endCallI.svg';

const VideoCallUi = (props) =>
{
    const {
        myVideo,
        anotherStream,
        callAccepted,
        callEnded,
        call,
        anotherVideo,
        myData,
        leaveCall,
        toggleMedia,
        formattedTime,
        isMyMicOn,
        isMyCamOn,
        isAnotherCamOn,
        isAnotherMicOn,
    } = props

    return (
        <div
            className={classes.container}
        >
            <div className={`${classes.callContainer}`}>
                <div
                    className={`${classes.borderRadius} ${classes.person}`}
                >
                    {/* Another Person video */}
                    {(anotherStream || (callAccepted && !callEnded)) && (
                        <Video
                            videoRef={anotherVideo}
                            profileImage={call?.profileImage}
                            userName={call?.name}
                            isCamOn={isAnotherCamOn}
                        />
                    )}

                    {/* Not answer yet */}
                    {(!callAccepted && !callEnded) && (
                        <div className={classes.waiting}>
                            <div className={classes.waitingAvatar}>
                                <ProfilePic
                                    profileImage={call?.profileImage}
                                    userName={call?.name} />
                            </div>

                            <HeaderText>
                                {call?.name}
                            </HeaderText>
                            <Paragraph>
                                {(call && !call?.busy) ? "Calling..." : "Ringing..."}
                            </Paragraph>
                        </div>

                    )}

                    {/* status time + another mic */}
                    {(callAccepted && !callEnded) && (
                        <div
                            className={classes.statusBar}
                        >
                            <div className={`${classes.time}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.5 8.33333V12.5L15.625 15.625M21.875 12.5C21.875 17.6777 17.6777 21.875 12.5 21.875C7.32233 21.875 3.125 17.6777 3.125 12.5C3.125 7.32233 7.32233 3.125 12.5 3.125C17.6777 3.125 21.875 7.32233 21.875 12.5Z" stroke="#8D9196" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {formattedTime}
                            </div>
                            <IconButton disabled className={`${classes.icon} ${classes.iconLabel} ${classes.iconMic}`}>
                                {isAnotherMicOn ? (<MicIcon />) : (<MutedMicIcon  />)}
                            </IconButton>
                        </div>
                    )}

                    {/* My video */}
                    <div className={`${classes.shadow} ${classes.me} ${classes.borderRadius}`}>
                        <Video
                            muted={true}
                            videoRef={myVideo}
                            profileImage={myData.profileImage}
                            userName={myData.userName}
                            isCamOn={isMyCamOn}
                        />
                    </div>

                </div>
                <div className={classes.bottomBar}>
                    <IconButton className={`${classes.icon} ${classes.iconMic} ${!isMyMicOn ? classes.iconMuted : ""}`} onClick={() => toggleMedia("audio")}>
                        {isMyMicOn ? (<MicIcon />) : (<MutedMicIcon />)}
                    </IconButton>

                    <IconButton className={`${classes.icon} ${classes.iconCam} ${!isMyCamOn ? classes.iconMuted + " " + classes.iconCamOff : ""}`} onClick={() => toggleMedia("video")}>
                        {isMyCamOn ? (<CameraOnIcon />) : (<CameraOffIcon />)}
                    </IconButton>

                    <IconButton onClick={leaveCall} className={classes.endCall}>
                        <EndCallIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default VideoCallUi