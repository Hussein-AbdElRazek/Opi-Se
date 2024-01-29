import { IconButton } from "@mui/material"
import { useSelector } from "react-redux"

import { ProfilePic } from "../ui"
import classes from './styles/ProfileIcon.module.css'
import { useNavigate } from "react-router-dom"

export const ProfileIcon = () =>
{
    const navigate = useNavigate();

    const goToMyProfile = () =>
    {
        navigate(`/profile?type=MY_PROFILE`)
    }
    const userName = useSelector((state) => state.auth.userData?.userName);
    const profileImage = useSelector((state) => state.auth.userData?.profileImage);
    return (
        <IconButton
            className={classes.profileIcon}
            onClick={goToMyProfile}
        >
            <ProfilePic
                userName={userName}
                profileImage={profileImage}
            />
        </IconButton>
    )
}
