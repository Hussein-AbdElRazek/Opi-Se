import { IconButton } from "@mui/material"

import classes from './styles/IconBtn.module.css'
export const IconBtn = (props) =>
{
    const { img, onClick, component, to } = props;
    return (
        <IconButton
            onClick={onClick}
            className={classes.icon}
            component={component}
            to={to}
        >
            <img src={img} alt='icon' />
        </IconButton>
    )
}
