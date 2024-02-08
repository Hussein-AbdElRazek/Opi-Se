import { IconButton } from "@mui/material"

import classes from './styles/IconBtn.module.css'
export const IconBtn = (props) =>
{
    const { Icon, onClick, component, to } = props;
    return (
        <IconButton
            onClick={onClick}
            className={classes.icon}
            component={component}
            to={to}
        >
            <Icon fill="var(--secondary)" />
        </IconButton>
    )
}
