import { ProfilePic } from '../ui';
import classes from './styles/Video.module.css'

export const Video = (props) =>
{
    const {
        videoRef,
        muted,
        userName,
        profileImage,
    } = props;

    return (
        <div
            className={`${classes.container} center-x center-y`}
        >
            <video
                ref={videoRef}
                playsInline
                muted={muted}
                autoPlay
            />
        </div>

    )
}
/*
<div
            className={`${classes.container} center-x center-y`}
        >
            {true ? (
                <video
                    ref={videoRef}
                    playsInline
                    muted={muted}
                    autoPlay
                />
                ) 
                : (
                <div
                    className={classes.profilePic}
                >
                    <ProfilePic
                        userName={userName}
                        profileImage={profileImage}
                    />
                </div>
            )}

        </div>
*/