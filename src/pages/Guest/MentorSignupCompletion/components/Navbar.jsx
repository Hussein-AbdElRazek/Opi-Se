import { Logo } from '../../../../components/ui'
import classes from '../styles/Navbar.module.css'

const Navbar = () =>
{
    return (
        <div
            className={`${classes.container} center-y`}
        >
            <div className={classes.containerLogo}>
                <Logo />
            </div>
        </div>
    )
}

export default Navbar