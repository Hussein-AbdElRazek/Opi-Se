import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom';

import classes from './styles/NotificationAndRequestItem.module.css'
export const NotificationAndRequestItem = ({ itemData, action }) =>
{
    return (
        <ListItem
            disablePadding
            className={classes.container}
        >
            <ListItemAvatar>
                <Avatar
                    src={itemData.profilePic}
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
                                {itemData.userName}
                            </NavLink>
                            {itemData.message}
                        </h6>
                    }
                />
                {action}
            </div>
        </ListItem>
    )
}
