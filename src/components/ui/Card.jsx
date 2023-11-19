import classes from './styles/Card.module.css'

export const Card = ({ children }) =>
{
    return (
        <div
            className={classes.container}
        >
            {children}
        </div>
    )
}
