import { ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom';

import classes from './styles/NotificationAndRequestItem.module.css'
import { ProfilePic } from '../ui';
export const NotificationAndRequestItem = ({ itemData, action }) =>
{
    const to = itemData?.partnerId ? `/profile?userId=${itemData?.partnerId}&from=matchRequests&requestId=${itemData._id}` : null
    return (
        <ListItem
            disablePadding
            className={classes.container}
        >
            {itemData.requestStatus && (
                <ListItemAvatar>
                    <ProfilePic
                        src={itemData?.profileImage}
                        component={NavLink}
                        to={to}
                        className={classes.avatar}
                    />
                </ListItemAvatar>
            )}

            <div>
                <ListItemText
                    sx={{ "& span": { margin: "0 !important" } }}
                    primary={
                        <h6
                            className={classes.message}
                        >
                            {((itemData.userName || itemData.partnerUserName) && itemData.requestStatus ) && (
                                <NavLink
                                    to={to}
                                >
                                    {itemData.userName || itemData.partnerUserName}
                                </NavLink>
                            )}

                            {itemData.message}
                        </h6>
                    }
                />
                {action}
            </div>
        </ListItem>
    )
}
