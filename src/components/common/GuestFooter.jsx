import { NavLink } from 'react-router-dom'
import userNavbarClasses from '../appBar/styles/Navbar.module.css'
import { Logo } from '../ui'
import classes from './styles/GuestFooter.module.css'

export const GuestFooter = ({ pathname }) =>
{
    const isHome = pathname === "/";
    const links = [
        { to: '/', title: 'Home' },
        { to: '/about', title: 'About' },
        { to: '/features', title: 'Features' },
        { to: '/contact', title: 'Contact us' },
    ];

    return (
        <div
            className={`${classes.container} center-y space-between ${isHome ? classes.forHome : ""}`}
        >
            <div className='center-y space-between w-100'>
                <div
                    className={`${userNavbarClasses.logo} center-y ${classes.logo}`}
                >
                    <Logo />
                </div>
                <div className={classes.email}><a href="mailto:graduation.project.info@gmail.com">graduation.project.info@gmail.com</a> . All rights reserved.</div>
                <div className={classes.links}>
                    {/* filtering for don't show current page's link */}
                    {links.filter((link) => link.to !== pathname).map(({ to, title }) => (
                        <NavLink key={title} to={to}>{title}</NavLink>
                    ))}
                </div>
            </div>

            <div className={classes.emailBottom}><a href="mailto:graduation.project.info@gmail.com">graduation.project.info@gmail.com</a> . All rights reserved.</div>
        </div>
    )
}
