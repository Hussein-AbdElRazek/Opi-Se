import { NavLink } from 'react-router-dom'
import { Badge, Grid, IconButton } from '@mui/material'

import { IconBtn } from './IconBtn'
import classes from './styles/Navbar.module.css'
import { SearchBar } from './SearchBar'
import { ProfileIcon } from './ProfileIcon'
import { Logo } from '../ui'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as ProgressIcon } from '../../assets/icons/progress.svg'
import { ReactComponent as TasksIcon } from '../../assets/icons/tasks.svg'
import { ReactComponent as NotesIcon } from '../../assets/icons/notes.svg'
import { ReactComponent as ReportIcon } from '../../assets/icons/report.svg'
import { ReactComponent as NotificationIcon } from '../../assets/icons/notification.svg'
import { ReactComponent as AddFriendIcon } from '../../assets/icons/addFriend.svg'
import { ReactComponent as MentalHealthIcon } from '../../assets/icons/mentalHealth.svg'
import { PopMenu } from './PopMenu'
import { useSelector } from 'react-redux'

export const NavBar = ({ title }) =>
{
    const nationalId = useSelector(state => state.auth?.userData.nationalId);
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
            title: 'Report',
            to: `https://userdashboard-cv8d.onrender.com/${nationalId}`,
            Icon: ReportIcon,
            target: "_blank"
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
        >
            <Grid
                item
                xl={4}
                lg={4}
                md={4}
                xs={9}
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

            <PopMenu />

            <Grid
                item
                xl={3}
                lg={3}
                md={4}
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
            <Grid
                item
                lg={1.5}
                className={classes.rightIcons}
            >
                <Badge
                    overlap="circular"
                    badgeContent=" "
                    invisible={!isNewNotification}
                >
                    <IconBtn
                        Icon={NotificationIcon}
                        component={NavLink}
                        to={title === "Notifications" ? "/" : "notifications"}
                    />
                </Badge>

                <IconBtn
                    Icon={AddFriendIcon}
                    component={NavLink}
                    to={title === "Requests" ? "/" : "requests"}
                />
                <ProfileIcon id={"profileMenu"} />
            </Grid>
        </Grid>
    )
}
