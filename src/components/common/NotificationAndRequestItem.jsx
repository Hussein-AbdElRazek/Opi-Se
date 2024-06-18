import { ListItem, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom';

import classes from './styles/NotificationAndRequestItem.module.css'
import { ProfilePic } from '../ui';
import moment from 'moment';

export const NotificationAndRequestItem = ({ itemData, action, lastElementRef, closeRequestsMenu }) =>
{
    const to = itemData?.partnerId ?
        `/profile?userId=${itemData?.partnerId}&from=matchRequests&requestId=${itemData._id}`
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
                            title={!!itemData?.requestStatus ? "send you add request" : itemData.message}
                        >
                            {((itemData.userName || itemData.partnerUserName) && itemData.requestStatus) && (
                                <NavLink
                                    to={to}
                                    onClick={closeRequestsMenu}
                                >
                                    {itemData.userName || itemData.partnerUserName}
                                </NavLink>
                            )}
                            {!!itemData?.requestStatus ? "send you add request" : itemData.message}
                        </h6>
                    }
                    secondary={finalDate}
                />
                {action}
            </div>
        </ListItem>
    )
}
