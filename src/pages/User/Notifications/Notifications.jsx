import React, { useEffect } from 'react'
import NotificationsUi from './NotificationsUi'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../../store/user-slice';
import useScrollingPagination from '../../../hooks/use-scrolling-pagination';
import useHttp from '../../../hooks/use-http';
import { authActions } from '../../../store/auth-slice';
import { mentorModulePath, userModulePath } from '../../../config';

const Notifications = ({ type }) =>
{
    const notifications = useSelector((state) => state.auth.notifications) || [];
    const dispatch = useDispatch();
    const uiId = "notifications";
    const isNotificationsOpened = !!useSelector(state => state.ui.isPopMenuOpened)[uiId];
    const role = useSelector((state) => state.auth.userData.role)

    useEffect(() =>
    {
        if (isNotificationsOpened) dispatch(userActions.updateNewNotificationMark(false))
    }, [isNotificationsOpened, dispatch])
    const isNotificationsOpen = !!useSelector(state => state.ui.isPopMenuOpened)[uiId]

    const {
        sendRequest: getNotifications,
        isLoading: isLoadingGetNotifications,
    } = useHttp();

    // handle pagination 
    const initialTotalPages = useSelector(state => state.auth.notificationsTotalPages);
    const {
        lastElementRef,
        currentPage
    } = useScrollingPagination(isLoadingGetNotifications, initialTotalPages);

    useEffect(() =>
    {
        const getResponse = ({ message, data, totalPages }) =>
        {
            if (message.includes("success"))
            {
                // update store with new notes
                dispatch(authActions.mergeUserNotifications(data))

                // update total pages in store
                dispatch(authActions.updateNotificationsTotalPages(totalPages))
            }
        };

        if (isNotificationsOpen) getNotifications(
            {
                url: `${role === 'user' ? userModulePath : mentorModulePath}/getNotifications?page=${currentPage + 1}&limit=${20}`,
            },
            getResponse
        );
    }, [currentPage, dispatch, getNotifications, isNotificationsOpen, role])

    return (
        <NotificationsUi
            notifications={notifications}
            type={type}
            uiId={uiId}
            lastElementRef={lastElementRef}
            isLoadingGetNotifications={isLoadingGetNotifications}
        />
    )
}

export default Notifications