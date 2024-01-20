import { LoadingButton } from '@mui/lab';

import classes from './styles/OutlinedBtn.module.css'
import btnClasses from './styles/Btn.module.css'

export const OutlinedBtn = (props) =>
{
    const {
        children,
        onClick,
        isLoading,
        type,
        size,
        endIcon,
        startIcon,
        className,
        disabled
    } = props;
    return (
        <LoadingButton
            type={type}
            onClick={onClick}
            loading={isLoading}
            fullWidth={size !== "small"}
            className={`
            ${btnClasses.btn} 
            ${classes.outlined}
            ${className} 
            ${size === "small" ? btnClasses.small : ""}
            `}
            endIcon={endIcon}
            startIcon={startIcon}
            disabled={disabled}
        >
            {children}
        </LoadingButton>
    )
}