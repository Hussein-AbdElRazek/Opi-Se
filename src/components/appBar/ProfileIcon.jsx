import { IconButton } from "@mui/material"

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
    return (
        <IconButton
            className={classes.profileIcon}
            onClick={goToMyProfile}
        >
            <ProfilePic />
        </IconButton>
    )
}
