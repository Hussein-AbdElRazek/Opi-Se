import React, { useEffect } from 'react'
import NotificationsUi from './NotificationsUi'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../../store/user-slice';

const Notifications = () =>
{
    const notifications = useSelector((state) => state.auth.notifications) || [];
    const dispatch = useDispatch();
    useEffect(() =>
    {
        dispatch(userActions.updateNewNotificationMark(false))
    }, [dispatch])

    return (
        <NotificationsUi
            notifications={notifications}
        />
    )
}

export default Notifications