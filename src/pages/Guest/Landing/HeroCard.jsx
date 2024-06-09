import { ButtonBase } from '@mui/material'
import classes from './Landing.module.css'
import { NavLink } from 'react-router-dom'

const HeroCard = ({ title, subTitle, img, to, disabled }) =>
{
    return (
        <ButtonBase
            className={classes.heroCard}
            style={{ backgroundImage: `url(${img})` }}
            to={to}
            disabled={disabled}
            LinkComponent={NavLink}
        >
            <div>
                <h3>
                    {title}
                </h3>
                {subTitle && <span>{subTitle}</span>}
            </div>
        </ButtonBase>
    )
}

export default HeroCard