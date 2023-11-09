import { IconButton } from "@mui/material"

import classes from './styles/IconBtn.module.css'
export const IconBtn = (props) =>
{
    const { img, onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            className={classes.icon}
        >
            <img src={img} alt='icon' />
        </IconButton>
    )
}
