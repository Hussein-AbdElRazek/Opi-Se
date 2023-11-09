import { useSelector } from "react-redux"

import classes from './styles/ProfilePic.module.css'
export const ProfilePic = () =>
{
    const userName = useSelector((state) => state.auth.userData.userName);
    const profileImage = useSelector((state) => state.auth.userData.profileImage);
    // const profileImage = "default.png";
    const isHavePic = profileImage !== "default.png";
    return (
        <div
            style={{
                backgroundImage: `url(${isHavePic ? profileImage : null})`
            }}
            className={`
            ${classes.container}
            center-x
            center-y
            `}
        >
            {!isHavePic &&
                <h4>
                    {userName[0].toUpperCase()}
                </h4>
            }
        </div>
    )
}
