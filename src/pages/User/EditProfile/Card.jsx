import classes from './styles/Card.module.css'

const Card = ({ title, children }) =>
{
    return (
        <div
            className={classes.container}
        >
            <h4
                className={classes.title}
            >
                {title}
                <div className={classes.line} />
            </h4>
            {children}
        </div>
    )
}

export default Card