import classes from './styles/MessagesDate.module.css'

export const MessagesDate = ({ children }) =>
{
    return (
        <div
            className={classes.container}
        >
            {children}
        </div>
    )
}
