import { IconButton } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'

const ChatProfileHeader = () =>
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const navigateToChat = () =>
    {
        navigate(`/chats/chat?${searchParams}`)
    }
    return (
        <>
            <IconButton
                onClick={navigateToChat}
            >
                <CloseIcon fill='var(--text-header)' />
            </IconButton>
        </>
    )
}

export default ChatProfileHeader