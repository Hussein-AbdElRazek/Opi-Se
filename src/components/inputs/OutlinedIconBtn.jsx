import { IconButton, Tooltip } from "@mui/material"
import classes from './styles/OutlinedIconBtn.module.css'
const OutlinedIconBtn = (props) =>
{
    const { children, title, onClick } = props;
    return (
        <Tooltip
            title={title}
        >
            <IconButton
                type="button"
                onClick={onClick}
                className={classes.outlinedIconBtn}
            >
                {children}
            </IconButton>
        </Tooltip>
    )
}

export default OutlinedIconBtn