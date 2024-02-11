import { List } from '@mui/material'

import { PopUpCard } from '../../../components/ui'
import { NotificationAndRequestItem } from '../../../components/common'
import VectorAndText from '../../../components/common/VectorAndText'
import noNotificationImg from '../../../assets/images/noNotification.png'

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
            {(!notifications.length && !isLoadingGetNotifications) && (
                <VectorAndText
                    img={noNotificationImg}
                    h={"No Notifications yet"}
                    p={
                        <>
                            You have no notifications right now.
                            <br />
                            come back later
                        </>
                    }
                />
            )}
        </PopUpCard>
    )
}

export default NotificationsUi