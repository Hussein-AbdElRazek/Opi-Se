import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './RequestItem.module.css'
const RequestItem = (props) =>
{
    const { requestData } = props;
    return (
        <ListItem
            disablePadding
            className={classes.container}
        >
            <ListItemAvatar>
                <Avatar
                    src={requestData.profilePic}
                    component={NavLink}
                    to="/"
                    className={classes.avatar}
                />
            </ListItemAvatar>
            <div>
                <ListItemText
                    sx={{ "& span": { margin: "0 !important" } }}
                    primary={
                        <h6
                            className={classes.message}
                        >
                            <NavLink>
                                {requestData.userName}
                            </NavLink>
                            {requestData.message}
                        </h6>
                    }
                />
            </div>
        </ListItem>
    )
}

export default RequestItem