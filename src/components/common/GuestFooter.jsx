import { NavLink } from 'react-router-dom'
import userNavbarClasses from '../appBar/styles/Navbar.module.css'
import { Logo } from '../ui'
import classes from './styles/GuestFooter.module.css'

export const GuestFooter = () =>
{
    return (
        <div
            className={`${classes.container} center-y space-between`}
        >
            <div className='center-y space-between w-100'>
                <div
                    className={`${userNavbarClasses.logo} center-y ${classes.logo}`}
                >
                    <Logo />
                </div>
                <div className={classes.email}>graduation.project.info@gmail.com . All rights reserved.</div>
                <div className={classes.links}>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/features'>Features</NavLink>
                    <NavLink to='/contact'>Contact us</NavLink>
                </div>
            </div>

            <div className={classes.emailBottom}>graduation.project.info@gmail.com . All rights reserved.</div>
        </div>
    )
}
