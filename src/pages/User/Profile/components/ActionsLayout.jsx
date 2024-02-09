import classes from '../styles/ActionsLayout.module.css'

const ActionsLayout = ({ children }) =>
{
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default ActionsLayout