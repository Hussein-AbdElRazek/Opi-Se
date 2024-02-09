import { LoadingButton } from '@mui/lab';

import classes from './styles/Btn.module.css'
import { NavLink } from 'react-router-dom';

export const Btn = (props) =>
{
    const { children, onClick, isLoading, disabled, type, size, endIcon, startIcon, className, to } = props;
    return (
        <LoadingButton
            type={type}
            onClick={onClick}
            loading={isLoading}
            variant='contained'
            fullWidth={size !== "small"}
            className={`
            ${classes.btn} 
            ${className} 
            ${size === "small" ? classes.small : ""}
            `}
            endIcon={endIcon}
            startIcon={startIcon}
            disabled={disabled}
            LinkComponent={NavLink}
            to={to}
        >
            {children}
        </LoadingButton>
    )
}