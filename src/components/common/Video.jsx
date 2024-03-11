import { ProfilePic } from '../ui';
import classes from './styles/Video.module.css'

export const Video = (props) =>
{
    const {
        videoRef,
        muted,
        userName,
        profileImage,
        isCamOn,
        isIncoming
    } = props;

    return (
        <div
            className={`${classes.container} ${isIncoming ? classes.incoming : ""} center-x center-y`}
        >
            <video
                ref={videoRef}
                playsInline
                muted={muted}
                autoPlay
                style={{ display: isCamOn || isIncoming ? "block" : "none" }}
            />
            {!(isCamOn || isIncoming) && (
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
    )
}