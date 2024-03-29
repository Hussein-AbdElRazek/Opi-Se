import classes from '../styles/BadgeItem.module.css'

const BadgeItem = ({ src, alt, title, hours }) =>
{
    return (
        <div
            className={`${classes.container} center-x`}
        >
            <img src={src} alt={alt} />
            <div
                className={`${classes.title} w-100`}
            >
                {title}
            </div>
        </div>
    )
}

export default BadgeItem