import classes from '../styles/ActionsLayout.module.css'

const ActionsLayout = ({ children, isMyPartner }) =>
{
    return (
        <div className={`${classes.container} ${isMyPartner ? classes.myPartner : ""}`}>
            {children}
        </div>
    )
}

export default ActionsLayout