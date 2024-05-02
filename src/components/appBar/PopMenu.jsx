import {ListItemIcon } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PopUpMenu as PopUpMenuComponent } from '../common'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as ProgressIcon } from '../../assets/icons/progress.svg'
import { ReactComponent as TasksIcon } from '../../assets/icons/tasks.svg'
import { ReactComponent as NotesIcon } from '../../assets/icons/notes.svg'
import { ReactComponent as MentalHealthIcon } from '../../assets/icons/mentalHealth.svg'
import classes from './styles/PopMenu.module.css'
import { uiActions } from '../../store/ui-slice'
import { ProfileIcon } from './ProfileIcon'

export const PopMenu = () =>
{
    const userName = useSelector((state) => state.auth.userData?.userName);
    const menuId = "navbarPopMenu"
    const profileMenuId = "smallProfileMenu"
    const dispatch = useDispatch();
    const closeMenu = () => { dispatch(uiActions.closePopMenu(menuId)) };
    const isPopMenuProfileOpened = useSelector(state => state.ui.isPopMenuOpened)[profileMenuId] || false

    const handleToggleProfileMenu = () =>
    {
        if (isPopMenuProfileOpened) dispatch(uiActions.closePopMenu(profileMenuId))
        else dispatch(uiActions.openPopMenu(profileMenuId))
    }

    const menuItems = [
        // profile menu
        {
            noHover: true,
            onClick: handleToggleProfileMenu,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <ProfileIcon id={profileMenuId} onClose={closeMenu} />
                    </ListItemIcon>
                    <div className={classes.userName}>{userName}</div>
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
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <ProgressIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Progress
                </>,
            to: "/progress",
        },
        // tasks
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <TasksIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Tasks
                </>,
            to: "/tasks",
        },
        // notes
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <NotesIcon fill='var(--black-40)' />
                    </ListItemIcon>
                    Notes
                </>,
            to: "/notes",
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
    ]

    return (
        <PopUpMenuComponent
            id={menuId}
            openBtnType="base"
            openBtnChild={
                <MenuIcon fill='var(--text-header)'/>
            }
            openBtnClassName={classes.openBtn}
            menuItems={menuItems}
            containerClassName={classes.container}
            fullWidth={true}
        />
    )
}
