import { ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom';

import classes from './styles/NotificationAndRequestItem.module.css'
import { ProfilePic } from '../ui';

export const NotificationAndRequestItem = ({ itemData, action, lastElementRef, closeRequestsMenu }) =>
{
    const to = itemData?.partnerId ?
        `/profile?userId=${itemData?.partnerId}&from=matchRequests&requestId=${itemData._id}`
        : null;

    return (
        <ListItem
            disablePadding
            className={classes.container}
            ref={lastElementRef}
        >
            {itemData.requestStatus && (
                <ListItemAvatar
                    onClick={closeRequestsMenu}
                >
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
                            title={`${itemData.message}`}
                        >
                            {((itemData.userName || itemData.partnerUserName) && itemData.requestStatus) && (
                                <NavLink
                                    to={to}
                                    onClick={closeRequestsMenu}
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
