import React from 'react'
import NotificationsUi from './NotificationsUi'
import { useSelector } from 'react-redux'

const Notifications = () =>
{
    const notifications = useSelector((state)=>state.auth.userData.notifications)
    return (
        <NotificationsUi
            notifications={notifications}
        />
    )
}

export default Notifications