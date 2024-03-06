import { NavLink } from "react-router-dom";
import { ReactComponent as OpiSeLogo } from '../../assets/icons/opiSeLogo.svg'
import classes from './styles/Logo.module.css'
export const Logo = () =>
{
    return (
        <NavLink
            to="/"
            className={classes.logoContainer}
        >
            <OpiSeLogo className={classes.logo} />
        </NavLink>
    )
}