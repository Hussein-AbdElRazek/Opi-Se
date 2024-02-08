import { NavLink } from "react-router-dom"
import { ListItemIcon } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import { ProfilePic } from "../ui"
import classes from './styles/UserMenu.module.css'
import { PopUpMenu as PopUpMenuComponent } from '../common'
import { uiActions } from "../../store/ui-slice"
import { ReactComponent as SettingIcon } from '../../assets/icons/setting.svg'
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg'
import { authActions } from "../../store/auth-slice"


export const UserMenu = ({ id, onClose, openBtnChild, openBtnClassName, openBtnType, containerClassName }) =>
{
    // user data
    const userName = useSelector((state) => state.auth.userData?.userName);
    const profileImage = useSelector((state) => state.auth.userData?.profileImage);

    //handle ui pop menu
    const profileIconId = id
    const dispatch = useDispatch();
    const closeMenu = () =>
    {
        dispatch(uiActions.closePopMenu(profileIconId));
        onClose && onClose();
    };
    const menuItems = [
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <ProfilePic
                            userName={userName}
                            profileImage={profileImage}
                        />
                    </ListItemIcon>
                    {userName}
                </>,
            to: "/profile?type=MY_PROFILE",
        },
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <SettingIcon fill='var(--text-header)' />
                    </ListItemIcon>
                    Setting
                </>,
            to: "/profile/edit",
        },
        {
            onClick: () => { dispatch(authActions.logout()); closeMenu(); },
            children:
                <>
                    <ListItemIcon className={classes.icon}>
                        <ExitIcon fill='var(--text-header)' />
                    </ListItemIcon>
                    Logout
                </>,
        },
    ]

    return (
        <PopUpMenuComponent
            id={profileIconId}
            openBtnType={openBtnType}
            openBtnChild={openBtnChild}
            openBtnClassName={openBtnClassName}
            containerClassName={`${classes.container} ${containerClassName ? containerClassName : ""}`}
            menuProps={{
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                }
            }}
            menuItems={menuItems}
        />
    )
}
