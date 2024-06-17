import { IconButton } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'
import classes from './styles/ChatProfileHeader.module.css'

const ChatProfileHeader = () =>
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const navigateToChat = () =>
    {
        navigate(`/chats/chat?${searchParams}`)
    }
    return (
        <div className={classes.header}>
            <IconButton
                onClick={navigateToChat}
            >
                <CloseIcon fill='var(--text-header)' />
            </IconButton>
        </div>
    )
}

export default ChatProfileHeader