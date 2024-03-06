import classes from './styles/PopUpCard.module.css'

export const PopUpCard = ({ children, title }) =>
{
    return (
        <div
            className={classes.container}
        >
            <h2
                className={classes.title}
            >
                {title}
            </h2>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}
