import { Avatar } from "@mui/material";

import classes from './styles/ProfilePic.module.css'

export const ProfilePic = (props) =>
{
    const { userName, profileImage } = props;

    return (
        <Avatar
            className={classes.container}
            src={profileImage}
        >
            {userName && userName[0].toUpperCase()}
        </Avatar>
    )
}
