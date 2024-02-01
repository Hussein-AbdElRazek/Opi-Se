import { IconButton } from '@mui/material'

import { ReactComponent as CancelIcon } from '../../../../assets/icons/cancel.svg'
import classes from '../styles/ContainedCircleIconBtn.module.css'

const CancelBtn = (props) =>
{
    const {
        onClick,
        disabled,
        _id,
        resetForm,
    } = props;
    return (
        <IconButton
            className={classes.iconBtn}
            type="button"
            onClick={onClick(_id, resetForm)}
            disabled={disabled}
        >
            <CancelIcon />
        </IconButton >
    )
}

export default CancelBtn;