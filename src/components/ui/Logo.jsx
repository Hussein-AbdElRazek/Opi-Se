import { NavLink } from "react-router-dom";
import { ReactComponent as OpiSeLogo } from '../../assets/icons/opiSeLogo.svg'
import classes from './styles/Logo.module.css'
export const Logo = () =>
{
    return (
        <NavLink
            to="/"
        >
            <OpiSeLogo className={classes.logo} />
        </NavLink>
    )
}