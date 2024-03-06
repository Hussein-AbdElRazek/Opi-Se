import { List } from '@mui/material'

import { PopUpCard } from '../../../components/ui'
import { NotificationAndRequestItem } from '../../../components/common'
import VectorAndText from '../../../components/common/VectorAndText'
import noNotificationImg from '../../../assets/images/noNotification.png'
import { PopUpMenu as PopUpMenuComponent } from '../../../components/common'
import classes from '../../../components/appBar/styles/IconBtn.module.css'
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification.svg'
import popUpCardClasses from '../../../components/ui/styles/PopUpCard.module.css'
import navbarPopMenuClasses from '../../../components/appBar/styles/PopMenu.module.css'

const NotificationsUi = ({ notifications, isLoadingGetNotifications, type }) =>
{
    return (
        <PopUpMenuComponent
            id="notifications"
            openBtnType={"icon"}
            openBtnClassName={type === "navbar" ? classes.icon : navbarPopMenuClasses.popIconBtn}
            openBtnChild={
                <NotificationIcon
                    fill={type === "navbar" ?
                        "var(--secondary)" :
                        'var(--black-40)'
                    }
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
                </PopUpCard>
            }
        />
    )
}

export default NotificationsUi