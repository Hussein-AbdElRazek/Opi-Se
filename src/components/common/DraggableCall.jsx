import React from 'react'
import Draggable from 'react-draggable';

import classes from './styles/DraggableCall.module.css'
import { HeaderText, ProfilePic } from '../ui';
import { Video } from './Video';
export const DraggableCall = (props) =>
{
    const {
        call,
        secondaryText,
        type,
        video,
        actions,
        isReceivingCall
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
                        className={classes.info}
                    >
                        <div
                            className={`${classes.profilePic} ${classes.marginTop}`}
                        >
                            <ProfilePic
                                profileImage={call?.profileImage}
                                userName={call?.userName}
                            />
                        </div>
                        {call?.name && (
                            <HeaderText>
                                {call?.name}
                            </HeaderText>
                        )}
                        {secondaryText && (
                            <span>
                                {secondaryText}
                            </span>
                        )}
                    </div>

                    {type === "video" && (
                        <div className={`${classes.marginTop} ${classes.videoContainer}`}>
                            <Video
                                videoRef={video}
                                muted={true}
                                isIncoming={true}
                            />
                        </div>
                    )}

                    <div
                        className={`${classes.action}  ${classes.marginTop} ${(type === "voice" && !isReceivingCall) ? classes.voiceAction : ""}`}
                    >
                        {actions}
                    </div>

                </div>
            </div>
        </Draggable>
    )
}
