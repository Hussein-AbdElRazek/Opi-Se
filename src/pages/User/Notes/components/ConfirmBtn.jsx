import { CircularProgress, IconButton } from '@mui/material'

import { ReactComponent as ConfirmIcon } from '../../../../assets/icons/confirm.svg'
import classes from '../styles/ContainedCircleIconBtn.module.css'

export const ConfirmBtn = (props) =>
{
    const {
        isLoading,
    } = props;
    return (
        isLoading ?
            (<CircularProgress className={classes.loading} />) :
            (
                <IconButton
                    className={classes.iconBtn}
                    type='submit'
                >
                    <ConfirmIcon />
                </IconButton>
            )
    )
}

export default ConfirmBtn;