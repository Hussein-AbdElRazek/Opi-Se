import { IconButton } from "@mui/material"

import { ProfilePic } from "../ui"
import classes from './styles/ProfileIcon.module.css'

export const ProfileIcon = () =>
{
    return (
        <IconButton
            className={classes.profileIcon}
        >
            <ProfilePic />
        </IconButton>
    )
}
