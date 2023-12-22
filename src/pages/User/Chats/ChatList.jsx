import { List } from '@mui/material';
import ChatItem from './ChatItem';
import classes from './Chats.module.css'

const ChatList = (props) =>
{
    const { title, chatList } = props;
    return (
        <div
            className={classes.list}
        >
            <h6
                className={classes.listTitle}
            >
                {title}
            </h6>
            <List
                dense={true}
            >
                {chatList.map(chatItem => (
                    <ChatItem
                        chatItemData={chatItem}
                        key={chatItem.userName}
                    />
                ))}
            </List>

        </div>
    )
}

export default ChatList