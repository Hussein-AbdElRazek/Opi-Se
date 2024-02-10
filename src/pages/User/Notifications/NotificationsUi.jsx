import React from 'react'
import { PopUpCard } from '../../../components/ui'
import { NotificationAndRequestItem } from '../../../components/common'
import { List } from '@mui/material'

const NotificationsUi = ({ notifications, isLoadingGetNotifications }) =>
{
    return (
        <PopUpCard
            title={'Notifications'}
        >
            <List
                dense={true}
            >
                {notifications.map((notification, index) =>
                {
                    return (
                        < NotificationAndRequestItem
                            itemData={notification}
                            key={index}
                        />
                    )
                })}
            </List>
            {(!notifications.length && !isLoadingGetNotifications) && (<p
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                No notifications yet!
            </p>
            )}
        </PopUpCard>
    )
}

export default NotificationsUi