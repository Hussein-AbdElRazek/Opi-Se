import { IconButton } from '@mui/material'

import { ReactComponent as PinIcon } from '../../../../assets/icons/pin.svg'
import { ReactComponent as PinnedIcon } from '../../../../assets/icons/pinned.svg'
import classes from '../styles/PinBtn.module.css'

const PinBtn = ({ _id, isPinned, pinNote }) =>
{
    return (
        <IconButton
            className={classes.pinIcon}
            onClick={pinNote(_id, isPinned)}
            title={isPinned ? "UnPin Note" : "Pin Note"}
        >
            {isPinned ? <PinnedIcon /> : <PinIcon />}
        </IconButton>
    )
}

export default PinBtn