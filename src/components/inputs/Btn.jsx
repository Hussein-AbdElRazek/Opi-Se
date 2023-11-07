import { LoadingButton } from '@mui/lab';

import classes from './styles/Btn.module.css'

export const Btn = (props) =>
{
    const { children, onClick, isLoading, type } = props;
    return (
        <LoadingButton
            type={type}
            onClick={onClick}
            loading={isLoading}
            variant='contained'
            fullWidth
            className={classes.btn}
        >
            {children}
        </LoadingButton>
    )
}