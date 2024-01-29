import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'
import classes from './Chats.module.css'

const ChatsHeader = () =>
{
    const navigate = useNavigate();

    const closeChats = () =>
    {
        navigate("/")
    }

    return (
        <div
            className={classes.header}
        >
            <h5>Chats</h5>
            <IconButton
                onClick={closeChats}
            >
                <CloseIcon fill='var(--primary)' />
            </IconButton>
        </div>
    )
}

export default ChatsHeader