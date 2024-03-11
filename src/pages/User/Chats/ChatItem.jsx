import { Badge, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import classes from './Chats.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProfilePic } from '../../../components/ui/ProfilePic';
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

    const isNewMessage = useSelector(state => state?.chat?.newMessageMark);

    return (
        <ListItem
            disablePadding
            className={classes.item}
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
                <Badge
                    overlap="circular"
                    variant="dot"
                    invisible={!isNewMessage}
                >
                    <ListItemAvatar>
                        <div
                            className={classes.profilePicContainer}
                        >
                            <ProfilePic
                                profileImage={chatItemData.profileImage}
                                userName={chatItemData.userName}
                            />
                        </div>
                    </ListItemAvatar>
                </Badge>
                <ListItemText
                    sx={{ "& span": { margin: "0 !important" } }}
                    primary={
                        <h6
                            className={classes.username}
                        >
                            {chatItemData.userName}
                        </h6>
                    }
                />
            </ListItemButton>
        </ListItem>
    )
}

export default ChatItem