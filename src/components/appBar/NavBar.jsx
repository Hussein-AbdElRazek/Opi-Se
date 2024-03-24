import { NavLink } from 'react-router-dom'
import { Badge, Grid, IconButton } from '@mui/material'

import classes from './styles/Navbar.module.css'
import { SearchBar } from './SearchBar'
import { ProfileIcon } from './ProfileIcon'
import { Logo } from '../ui'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as ProgressIcon } from '../../assets/icons/progress.svg'
import { ReactComponent as TasksIcon } from '../../assets/icons/tasks.svg'
import { ReactComponent as NotesIcon } from '../../assets/icons/notes.svg'
import { ReactComponent as MentalHealthIcon } from '../../assets/icons/mentalHealth.svg'
import { PopMenu } from './PopMenu'
import { useSelector } from 'react-redux'
import Notifications from '../../pages/User/Notifications/Notifications'
import MatchRequests from '../../pages/User/MatchRequests/MatchRequests'

export const NavBar = () =>
{
    const mainLinks = [
        {
            title: 'Home',
            to: "/",
            Icon: HomeIcon,
        },
        {
            title: 'Progress',
            to: '/progress',
            Icon: ProgressIcon,
        },
        {
            title: 'Tasks',
            to: "/tasks",
            Icon: TasksIcon,
        },
        {
            title: 'Notes',
            to: "/notes",
            Icon: NotesIcon,
        },
        {
            title: 'Mental Health',
            to: `/mental-health`,
            Icon: MentalHealthIcon,
        },
    ]

    const isNewNotification = useSelector(state => state?.user?.newNotificationMark);

    return (
        <Grid
            container
            className={classes.container}
            columnSpacing={{ sm: 0.5 }}
        >
            {/* logo + search bar */}
            <Grid
                item
                xl={4}
                lg={4}
                md={5}
                sm={6}
                xs={4}
                className="center-y"
            >
                <div className={classes.logo}>
                    <Logo />
                </div>

                <div
                    className={classes.searchBar}
                >
                    <SearchBar />
                </div>
            </Grid>

            {/* main links */}
            <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={3}
                className={classes.mainIcons}
            >
                {mainLinks.map(({ title, to, Icon, target }) => (
                    <IconButton
                        key={title}
                        title={title}
                        to={to}
                        component={NavLink}
                        target={target}
                    >
                        <Icon fill='var(--black-40)' />
                    </IconButton>
                ))}
            </Grid>

            {/* rights icons */}
            <Grid
                item
                lg={2}
                md={2}
                sm={2.5}
                className={`${classes.rightIcons} center-y `}
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    invisible={!isNewNotification}
                >
                    <Notifications />
                </Badge>

                <MatchRequests />
                <div className={classes.popMenu}><PopMenu /></div>
                <div className={classes.profileIcon}><ProfileIcon id={"profileMenu"} /></div>
            </Grid>
        </Grid>
    )
}
