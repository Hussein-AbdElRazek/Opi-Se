import { ListItem, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom';

import classes from './styles/NotificationAndRequestItem.module.css'
import { ProfilePic } from '../ui';
import moment from 'moment';

export const NotificationAndRequestItem = ({ itemData, action, lastElementRef, closeRequestsMenu, type }) =>
{
    const to = itemData?._id ?
        `/profile?userId=${itemData?._id}&from=matchRequests`
        : null;

    const formattedDate = moment(itemData.date).format('h:mm A, D MMMM YYYY');
    const finalDate = ' at ' + formattedDate;

    return (
        <ListItem
            disablePadding
            className={classes.container}
            ref={lastElementRef}
        >
            {!!itemData?.profileImage && (
                <ProfilePic
                    profileImage={itemData?.profileImage}
                    component={NavLink}
                    to={to}
                    className={classes.avatar}
                    onClick={closeRequestsMenu}
                />
            )}

            <div>
                <ListItemText
                    sx={{ "& span": { margin: "0 !important" } }}
                    primary={
                        <h6
                            className={classes.message}
                            title={type === "requests" ? "send you add request" : itemData.message}
                        >
                            {(itemData.userName ) && (
                                <NavLink
                                    to={to}
                                    onClick={closeRequestsMenu}
                                >
                                    {itemData.userName }
                                </NavLink>
                            )}
                            {type ==="requests" ? "send you add request" : itemData.message}
                        </h6>
                    }
                    secondary={finalDate}
                />
                {action}
            </div>
        </ListItem>
    )
}
