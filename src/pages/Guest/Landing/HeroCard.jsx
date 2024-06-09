import classes from './Landing.module.css'

const HeroCard = ({ title, subTitle, img }) =>
{
    return (
        <div className={classes.heroCard}
            style={{ backgroundImage: `url(${img})` }}
        >
            <h3>
                {title}
            </h3>
            {subTitle && <span>{subTitle}</span>}
        </div>
    )
}

export default HeroCard