import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

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
                <ClearRoundedIcon />
            </IconButton>
        </div>
    )
}

export default ChatsHeader