import { LoadingButton } from '@mui/lab';

import classes from './styles/Btn.module.css'

export const Btn = (props) =>
{
    const { children, onClick, isLoading, disabled, type, size, endIcon, className } = props;
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
            disabled={disabled}
        >
            {children}
        </LoadingButton>
    )
}