import navbarClasses from '../styles/Navbar.module.css'
import classes from '../styles/ActionsContainer.module.css'

const ActionsContainer = ({ children }) =>
{
    return (
        <div className={`${navbarClasses.container} ${classes.container} space-between`}>
            {children}
        </div>
    )
}

export default ActionsContainer