import { LoadingButton } from '@mui/lab';

import './styles/Btn.module.css'

const Btn = (props) =>
{
    const { children, onClick, isLoading, type } = props;
    return (
        <LoadingButton
            type={type}
            onClick={onClick}
            loading={isLoading}
            variant='contained'
            fullWidth
        >
            {children}
        </LoadingButton>
    )
}

export default Btn