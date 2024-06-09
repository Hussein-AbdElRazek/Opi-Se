import classes from './styles/GuestCard.module.css'
export const GuestCard = ({ children }) =>
{
    return (
        <div className={classes.container}>{children}</div>
    )
}
