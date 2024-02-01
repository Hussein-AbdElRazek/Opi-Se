import { IconButton } from '@mui/material'

import { ReactComponent as PinIcon } from '../../../../assets/icons/pin.svg'
import classes from '../styles/PinBtn.module.css'

const PinBtn = ({ _id, isPinned, pinNote }) =>
{
    return (
        <IconButton
            className={classes.pinIcon}
            // onClick={pinNote(_id, isPinned)}
            title={isPinned ? "UnPin Note" : "Pin Note"}
        >
            <PinIcon fill={isPinned ? "var(--secondary)" : "var(--text-header)"} />
        </IconButton>
    )
}

export default PinBtn