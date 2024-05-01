import { List } from '@mui/material'

import { LoadingCenter, PopUpCard } from '../../../components/ui'
import { NotificationAndRequestItem } from '../../../components/common'
import VectorAndText from '../../../components/common/VectorAndText'
import noNotificationImg from '../../../assets/images/noNotification.png'
import { PopUpMenu as PopUpMenuComponent } from '../../../components/common'
import classes from '../../../components/appBar/styles/IconBtn.module.css'
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification.svg'
import popUpCardClasses from '../../../components/ui/styles/PopUpCard.module.css'

const NotificationsUi = ({ notifications, isLoadingGetNotifications, uiId, lastElementRef }) =>
{
    return (
        <PopUpMenuComponent
            id={uiId}
            openBtnType={"icon"}
            openBtnClassName={classes.icon}
            openBtnChild={
                <NotificationIcon
                    fill={"var(--secondary)"}
                />
            }
            containerClassName={popUpCardClasses.parent}
            placement="top"
            children={
                <PopUpCard PopUpCard
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
                                    lastElementRef={notifications.length === index + 1 ? lastElementRef : null}
                                />
                            )
                        })}
                    </List>
                    {
                        (!notifications.length && !isLoadingGetNotifications) && (
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
                        )
                    }
                    
                    {isLoadingGetNotifications && <LoadingCenter />}
                </PopUpCard>
            }
        />
    )
}

export default NotificationsUi