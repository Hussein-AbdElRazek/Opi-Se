import { IconButton } from '@mui/material'

import classes from './VideoCall.module.css'
import { Video } from '../../../components/common';

const MicrophoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M24.25 13.75C24.25 18.5825 20.3325 22.5 15.5 22.5M15.5 22.5C10.6675 22.5 6.75 18.5825 6.75 13.75M15.5 22.5V27.5M15.5 27.5H10.5M15.5 27.5H20.5M15.5 17.5C13.4289 17.5 11.75 15.8211 11.75 13.75V6.25C11.75 4.17893 13.4289 2.5 15.5 2.5C17.5711 2.5 19.25 4.17893 19.25 6.25V13.75C19.25 15.8211 17.5711 17.5 15.5 17.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const MutedMicrophoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
    <line x1="1.66257" y1="1.251" x2="27.6626" y2="24.251" stroke="black" strokeWidth="2" />
    <line x1="0.662574" y1="2.251" x2="26.6626" y2="25.251" stroke="white" strokeWidth="2" />
</svg>

const OpenedCameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M15.625 10.4167L20.3675 8.04542C21.0601 7.69912 21.875 8.20276 21.875 8.97712V16.0229C21.875 16.7972 21.0601 17.3009 20.3675 16.9546L15.625 14.5833M5.20833 18.75H13.5417C14.6923 18.75 15.625 17.8173 15.625 16.6667V8.33333C15.625 7.18274 14.6923 6.25 13.5417 6.25H5.20833C4.05774 6.25 3.125 7.18274 3.125 8.33333V16.6667C3.125 17.8173 4.05774 18.75 5.20833 18.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const ClosedCameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
    <line x1="2.16257" y1="1.251" x2="28.1626" y2="24.251" stroke="black" strokeWidth="2" />
    <line x1="1.16257" y1="2.251" x2="27.1626" y2="25.251" stroke="white" strokeWidth="2" />
</svg>


const EndCallIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
    <g clipPath="url(#clip0_196_335)">
        <path d="M41.7482 22.6866C42.8872 23.8257 42.8872 25.6724 41.7482 26.8114L38.3666 30.193C37.9227 30.6368 37.2447 30.7469 36.6832 30.4661L30.5051 27.3771C29.8559 27.0525 29.5443 26.3 29.7737 25.6115L30.9376 22.12C27.28 20.7356 23.218 20.7356 19.5604 22.12L20.7242 25.6115C20.9537 26.3 20.642 27.0525 19.9929 27.3771L13.8148 30.4661C13.2533 30.7469 12.5752 30.6368 12.1314 30.193L8.74984 26.8114C7.61081 25.6724 7.61081 23.8257 8.74984 22.6866L9.78103 21.6554C18.3238 13.1127 32.1742 13.1127 40.717 21.6554L41.7482 22.6866Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_196_335">
            <rect width="35" height="35" fill="white" transform="translate(49.998 24.749) rotate(135)" />
        </clipPath>
    </defs>
</svg>



const VideoCallUi = (props) =>
{
    const {
        myVideo,
        stream,
        anotherStream,
        callAccepted,
        callEnded,
        call,
        anotherVideo,
        myData,
        leaveCall,
        toggleMedia,
        formattedTime,
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
                            userName={call?.userName}
                        />
                    )}
                    {/* Not answer yet */}
                    {(!callAccepted && !callEnded) && (
                        <h1>
                            Waiting for user...
                        </h1>
                    )}
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
                            <IconButton disabled className={`${classes.iconLabel} ${classes.icon}`}>
                                <MicrophoneIcon />
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
                        />
                    </div>

                </div>
                <div className={classes.bottomBar}>
                    <IconButton className={classes.icon} onClick={() => toggleMedia("audio")}>
                        <MicrophoneIcon />
                    </IconButton>

                    <IconButton className={classes.icon} onClick={() => toggleMedia("video")}>
                        <OpenedCameraIcon />
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