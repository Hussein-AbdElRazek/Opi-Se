import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import classes from './styles/GuestNav.module.css'
import userNavbarClasses from '../appBar/styles/Navbar.module.css'
import popMenuClasses from '../appBar/styles/PopMenu.module.css'
import { Logo } from '../ui'
import { Tabs } from './Tabs'
import { Btn } from '../inputs'
import { PopUpMenu } from './PopUpMenu'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as CloseMenuIcon } from '../../assets/icons/closeMenu.svg'

export const GuestNav = ({ forHome }) =>
{
    const tabs = [
        {
            value: 0,
            label: "Home",
            to: "/",
        },
        {
            value: 1,
            label: "About",
            to: "/about"
        },
        {
            value: 2,
            label: "Features",
            to: "/features"
        },
        {
            value: 3,
            label: "Contact Us",
            to: "/contact"
        },
    ]

    const tabsMap = {
        "/": 0,
        "/about": 1,
        "/features": 2,
        "/contact": 3,
    }

    // Pop Menu data
    const menuId = "navbarPopMenu"
    const dispatch = useDispatch();
    const closeMenu = () => { dispatch(uiActions.closePopMenu(menuId)) };
    const isPopMenuOpened = useSelector(state => state.ui.isPopMenuOpened)[menuId] || false

    const menuItems = [
        // home
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    Home
                </>,
            to: "/",
        },
        // about
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    About
                </>,
            to: "/about",
        },
        // features
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    Features
                </>,
            to: "/features",
        },
        // contact us
        {
            onClick: closeMenu,
            menuItemComponent: NavLink,
            children:
                <>
                    Contact Us
                </>,
            to: "/contact",
        },
        //  Sign up
        {
            component:
                <div className={classes.authMenu} onClick={closeMenu}>
                    <Btn
                        to="/signup"
                        className={classes.popSignUpBtn}
                    >
                        Sign Up
                    </Btn>
                </div>
            ,
        },
        //  Sign up
        {
            component:
                <div className={classes.authMenu} onClick={closeMenu}>
                    <Btn
                        to="/login"
                        className={classes.loginBtn}
                    >
                        Sign Up
                    </Btn>
                </div>
            ,
        },
    ]
    return (
        <div
            className={`${classes.container} center-y space-between ${forHome ? classes.forHome : ""}`}
        >
            <div
                className={`${userNavbarClasses.logo} center-y`}
            >
                <Logo />
            </div>

            <div
                className={classes.links}
            >
                <Tabs
                    tabs={tabs}
                    tabsMap={tabsMap}
                    tabsClassName={classes.tabs}
                />

                <div
                    className={`${classes.authLinks} center-y `}
                >
                    <Btn
                        to="/login"
                        className={`${classes.loginBtn} ${forHome ? classes.loginHome : ""}`}
                    >
                        Login
                    </Btn>
                    <Btn
                        to="/signup"
                        className={`${classes.signUpBtn} ${forHome ? classes.signupHome : ""}`}
                    >
                        Sign Up
                    </Btn>
                </div>
            </div>

            <div className={classes.popMenu}>
                <PopUpMenu
                    id={menuId}
                    openBtnType="base"
                    openBtnChild={
                        isPopMenuOpened ? <CloseMenuIcon className={classes.closeMenuIcon} /> :
                            <MenuIcon fill='var(--text-header)' />
                    }
                    openBtnClassName={`${popMenuClasses.openBtn} ${classes.openBtn}`}
                    menuItems={menuItems}
                    containerClassName={popMenuClasses.container}
                    fullWidth={true}
                />
            </div>
        </div>
    )
}
