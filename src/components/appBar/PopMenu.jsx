import { Badge, ListItemIcon } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PopUpMenu as PopUpMenuComponent } from '../common'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as ProgressIcon } from '../../assets/icons/progress.svg'
import { ReactComponent as TasksIcon } from '../../assets/icons/tasks.svg'
import { ReactComponent as NotesIcon } from '../../assets/icons/notes.svg'
import { ReactComponent as ReportIcon } from '../../assets/icons/report.svg'
import { ReactComponent as NotificationIcon } from '../../assets/icons/notification.svg'
import { ReactComponent as AddFriendIcon } from '../../assets/icons/addFriend.svg'
import { ReactComponent as MentalHealthIcon } from '../../assets/icons/mentalHealth.svg'
import classes from './styles/PopMenu.module.css'
import { uiActions } from '../../store/ui-slice'
import { ProfileIcon } from './ProfileIcon'

export const PopMenu = () =>
{
    const userName = useSelector((state) => state.auth.userData?.userName);
    const nationalId = useSelector((state) => state.auth.userData?.nationalId);
    const menuId = "navbarPopMenu"
    const profileMenuId = "smallProfileMenu"
    const dispatch = useDispatch();
    const closeMenu = () => { dispatch(uiActions.closePopMenu(menuId)) };
    const isNewNotification = useSelector(state => state?.user?.newNotificationMark);
    const isHavePartner = useSelector(state => state?.auth?.userData?.matchId);

    const menuItems = [
        // profile menu
        {
            noHover: true,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <ProfileIcon id={profileMenuId} onClose={closeMenu} />
                    </ListItemIcon>
                    {userName}
                </>,
        },
        // home 
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <HomeIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Home
                </>,
            to: "/",
        },
        // progress
        {
            // onClick: closeMenu,
            // menuItemComponent: NavLink,
            disabled: !isHavePartner,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <ProgressIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Progress
                </>,
            // to: "/progress",
        },
        // tasks
        {
            // onClick: closeMenu,
            // menuItemComponent: NavLink,
            disabled: true,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <TasksIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Tasks
                </>,
            // to: "/tasks",
        },
        // notes
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            disabled: !isHavePartner,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <NotesIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Notes
                </>,
            to: "/notes",
        },
        // report
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            disabled: !isHavePartner,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <ReportIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Report
                </>,
            to: `https://userdashboard-cv8d.onrender.com/${nationalId}`,
            target: "_blank"
        },
        // mental health
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <MentalHealthIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Mental Health
                </>,
            to: `/mental-health`,
        },
        // notifications
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <Badge
                        overlap="circular"
                        badgeContent=" "
                        invisible={!isNewNotification}
                        variant="dot"
                    >
                        <ListItemIcon className={classes.icon}>
                            <NotificationIcon fill='var(--black-40)' />
                        </ListItemIcon>
                    </Badge>
                    Notifications
                </>,
            to: "/notifications",
        },
        // requests
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <AddFriendIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Requests
                </>,
            to: "/requests",
        },
    ]

    return (
        <PopUpMenuComponent
            id={menuId}
            openBtnType="base"
            openBtnChild={
                <MenuIcon />
            }
            openBtnClassName={classes.openBtn}
            menuProps={{
                anchorReference: "anchorPosition",
                anchorPosition: {
                    top: 59, left: 0
                }
            }}
            menuItems={menuItems}
            containerClassName={classes.container}
            fullWidth={true}
        />
    )
}
