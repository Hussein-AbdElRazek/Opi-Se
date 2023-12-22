import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import classes from './Chats.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
const ChatItem = ({ chatItemData }) =>
{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const openChat = () =>
    {
        searchParams.set("userName", chatItemData.userName)
        searchParams.set("profileImage", chatItemData.profileImage)
        searchParams.set("id", chatItemData.id)
        navigate(`chat?${searchParams}`)

    }
    return (
        <ListItem
            disablePadding
        >
            <ListItemButton
                onClick={openChat}
                margin={0}
                sx={{
                    "& .MuiTouchRipple-root": {
                        margin: "0 !important"
                    }
                }}
            >
                <ListItemAvatar>
                    <Avatar
                        // src={chatItemData.profileImage}
                        sx={{ backgroundImage: `url(${chatItemData.profileImage})` }}
                    />
                </ListItemAvatar>
                <ListItemText
                    sx={{ "& span": { margin: "0 !important" } }}
                    primary={
                        <h6
                            className={classes.username}
                        >
                            {chatItemData.userName}
                        </h6>
                    }
                    secondary={
                        <span
                            className={classes.lastMessage}
                            title={`
                                ${chatItemData.lastMessage.from}: \n${chatItemData.lastMessage.message}
                            `}                            >
                            {`
                                    ${chatItemData.lastMessage.from}: 
                                    ${chatItemData.lastMessage.message}
                                `}
                        </span>
                    }
                />
            </ListItemButton>
        </ListItem>
    )
}

export default ChatItem