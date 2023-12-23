import { IconButton } from '@mui/material'
import classes from './VideoSession.module.css'
import t from '../../../assets/images/t.jpg';
import { ProfilePic } from '../../../components/ui/ProfilePic';
import { InputBar, MessagesList } from '../../../components/chat';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import VideoContext from '../../../videoSessionStore/video-session-context';

const MicrophoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M24.25 13.75C24.25 18.5825 20.3325 22.5 15.5 22.5M15.5 22.5C10.6675 22.5 6.75 18.5825 6.75 13.75M15.5 22.5V27.5M15.5 27.5H10.5M15.5 27.5H20.5M15.5 17.5C13.4289 17.5 11.75 15.8211 11.75 13.75V6.25C11.75 4.17893 13.4289 2.5 15.5 2.5C17.5711 2.5 19.25 4.17893 19.25 6.25V13.75C19.25 15.8211 17.5711 17.5 15.5 17.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const MutedMicrophoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
    <line x1="1.66257" y1="1.251" x2="27.6626" y2="24.251" stroke="black" stroke-width="2" />
    <line x1="0.662574" y1="2.251" x2="26.6626" y2="25.251" stroke="white" stroke-width="2" />
</svg>

const OpenedCameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M15.625 10.4167L20.3675 8.04542C21.0601 7.69912 21.875 8.20276 21.875 8.97712V16.0229C21.875 16.7972 21.0601 17.3009 20.3675 16.9546L15.625 14.5833M5.20833 18.75H13.5417C14.6923 18.75 15.625 17.8173 15.625 16.6667V8.33333C15.625 7.18274 14.6923 6.25 13.5417 6.25H5.20833C4.05774 6.25 3.125 7.18274 3.125 8.33333V16.6667C3.125 17.8173 4.05774 18.75 5.20833 18.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const ClosedCameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 29 26" fill="none">
    <line x1="2.16257" y1="1.251" x2="28.1626" y2="24.251" stroke="black" stroke-width="2" />
    <line x1="1.16257" y1="2.251" x2="27.1626" y2="25.251" stroke="white" stroke-width="2" />
</svg>

const ShareScreenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M20.5 21.25H24.25C25.6307 21.25 26.75 20.1307 26.75 18.75L26.75 7.5C26.75 6.11929 25.6307 5 24.25 5L6.75 5C5.36929 5 4.25 6.11929 4.25 7.5L4.25 18.75C4.25 20.1307 5.36929 21.25 6.75 21.25L10.5 21.25M11.75 16.25L15.5 12.5M15.5 12.5L19.25 16.25M15.5 12.5L15.5 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const EndCallIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
    <g clip-path="url(#clip0_196_335)">
        <path d="M41.7482 22.6866C42.8872 23.8257 42.8872 25.6724 41.7482 26.8114L38.3666 30.193C37.9227 30.6368 37.2447 30.7469 36.6832 30.4661L30.5051 27.3771C29.8559 27.0525 29.5443 26.3 29.7737 25.6115L30.9376 22.12C27.28 20.7356 23.218 20.7356 19.5604 22.12L20.7242 25.6115C20.9537 26.3 20.642 27.0525 19.9929 27.3771L13.8148 30.4661C13.2533 30.7469 12.5752 30.6368 12.1314 30.193L8.74984 26.8114C7.61081 25.6724 7.61081 23.8257 8.74984 22.6866L9.78103 21.6554C18.3238 13.1127 32.1742 13.1127 40.717 21.6554L41.7482 22.6866Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_196_335">
            <rect width="35" height="35" fill="white" transform="translate(49.998 24.749) rotate(135)" />
        </clipPath>
    </defs>
</svg>

const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M10.5 12.5H10.5125M15.5 12.5H15.5125M20.5 12.5H20.5125M11.75 20H6.75C5.36929 20 4.25 18.8807 4.25 17.5V7.5C4.25 6.11929 5.36929 5 6.75 5H24.25C25.6307 5 26.75 6.11929 26.75 7.5V17.5C26.75 18.8807 25.6307 20 24.25 20H18L11.75 26.25V20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M19.5402 6.54029L23.9596 10.9597M21.4152 4.66529C22.6356 3.4449 24.6143 3.4449 25.8346 4.66529C27.055 5.88568 27.055 7.86432 25.8346 9.08471L8.625 26.2943H4.25V21.8305L21.4152 4.66529Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const DotsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M15 6.25L15 6.2625M15 15L15 15.0125M15 23.75L15 23.7625M15 7.5C14.3096 7.5 13.75 6.94036 13.75 6.25C13.75 5.55964 14.3096 5 15 5C15.6904 5 16.25 5.55964 16.25 6.25C16.25 6.94036 15.6904 7.5 15 7.5ZM15 16.25C14.3096 16.25 13.75 15.6904 13.75 15C13.75 14.3096 14.3096 13.75 15 13.75C15.6904 13.75 16.25 14.3096 16.25 15C16.25 15.6904 15.6904 16.25 15 16.25ZM15 25C14.3096 25 13.75 24.4404 13.75 23.75C13.75 23.0596 14.3096 22.5 15 22.5C15.6904 22.5 16.25 23.0596 16.25 23.75C16.25 24.4404 15.6904 25 15 25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const VideoSessionUi = (props) =>
{
    const { messages, submitTextMessage } = props;

    const [searchParams] = useSearchParams();

    const {
        myVideo,
        stream,
        callAccepted,
        callEnded,
        anotherVideo
    } = useContext(VideoContext)

    return (
        <div
            className={classes.container}
        >
            <div className={`${classes.callContainer}`}>
                <div
                    className={`${classes.borderRadius} ${classes.person}`}
                >
                    {callAccepted && !callEnded && (
                        <video
                            playsInline
                            ref={anotherVideo}
                            autoPlay
                            className={classes.video}
                        />
                    )}
                    <div
                        className={classes.statusBar}
                    >
                        <div className={`${classes.time}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M12.5 8.33333V12.5L15.625 15.625M21.875 12.5C21.875 17.6777 17.6777 21.875 12.5 21.875C7.32233 21.875 3.125 17.6777 3.125 12.5C3.125 7.32233 7.32233 3.125 12.5 3.125C17.6777 3.125 21.875 7.32233 21.875 12.5Z" stroke="#8D9196" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            01:25:03
                        </div>
                        <IconButton disabled className={`${classes.iconLabel} ${classes.icon}`}>
                            <MicrophoneIcon />
                        </IconButton>
                    </div>
                    <div className={`${classes.me} ${classes.borderRadius} ${classes.shadow}`}>
                        {/* <ProfilePic /> */}
                        {stream && (
                            <video
                                playsInline
                                muted
                                ref={myVideo}
                                autoPlay
                                className={classes.video}
                            />
                        )}

                    </div>
                </div>
                <div className={classes.bottomBar}>
                    <IconButton className={classes.icon}>
                        <MicrophoneIcon />
                    </IconButton>

                    <IconButton className={classes.icon}>
                        <OpenedCameraIcon />
                    </IconButton>

                    <IconButton className={classes.icon}>
                        <ShareScreenIcon />
                    </IconButton>

                    <IconButton className={classes.endCall}>
                        <EndCallIcon />
                    </IconButton>

                    <IconButton
                        className={`${classes.icon} 
                        ${searchParams.get("chat") === "open" ? classes.opened : ""}`}
                        LinkComponent={NavLink}
                        to={`?chat=${searchParams.get("chat") === "open" ? "close" : "open"}`}
                    >
                        <ChatIcon />
                    </IconButton>

                    <IconButton className={classes.icon}>
                        <EditIcon />
                    </IconButton>

                    <IconButton className={classes.icon}>
                        <DotsIcon />
                    </IconButton>
                </div>
            </div>
            {searchParams.get("chat") === "open" && (
                <div className={`${classes.chatContainer} ${classes.borderRadius}`}>
                    <div
                        className={classes.chatHeader}
                    >
                        <h4
                            className={classes.title}
                        >
                            Chat
                            <div className={classes.line} />
                        </h4>
                    </div>

                    <div className={classes.chatContent}>
                        <MessagesList
                            messages={messages}
                        />
                    </div>

                    <InputBar
                        submitTextMessage={submitTextMessage}
                    />
                </div>
            )}


        </div>
    )
}

export default VideoSessionUi