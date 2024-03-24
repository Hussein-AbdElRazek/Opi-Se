import React, { useEffect } from 'react'
import NotificationsUi from './NotificationsUi'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../../store/user-slice';

const Notifications = ({ type }) =>
{
    const notifications = useSelector((state) => state.auth.notifications) || [];
    const dispatch = useDispatch();
    const uiId = "notifications";
    const isNotificationsOpened = !!useSelector(state => state.ui.isPopMenuOpened)[uiId];

    useEffect(() =>
    {
        if (isNotificationsOpened) dispatch(userActions.updateNewNotificationMark(false))
    }, [isNotificationsOpened, dispatch])

    return (
        <NotificationsUi
            notifications={notifications}
            type={type}
            uiId={uiId}
        />
    )
}

export default Notifications