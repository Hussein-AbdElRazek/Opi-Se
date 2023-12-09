import { IconButton } from '@mui/material'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import classes from './Chats.module.css'
import { useNavigate } from 'react-router-dom';
import ChatList from './ChatList';
const mentorsDummy = [
    {
        profilePic: "", userName: "Nada Abdelnasser",
        lastMessage:
        {
            from: "You",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser",
        lastMessage:
        {
            from: "Nada Abdelnasser",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser",
        lastMessage:
        {
            from: "Nada Abdelnasser",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser",
        lastMessage:
        {
            from: "Nada Abdelnasser",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser",
        lastMessage:
        {
            from: "Nada Abdelnasser",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser",
        lastMessage:
        {
            from: "Nada Abdelnasser",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
]
const ChatsUi = () =>
{
    const navigate = useNavigate()
    return (
        <div
            className={classes.container}
        >
            <div
                className={classes.header}
            >
                <h5>Chats</h5>
                <IconButton
                    onClick={() => navigate("/")}
                >
                    <ClearRoundedIcon />
                </IconButton>
            </div>
            <div
                className={classes.content}
            >
                <ChatList
                    title="Your Partner"
                    chatList={[
                        {
                            profilePic: "", userName: "Nada Abdelnasser",
                            lastMessage:
                            {
                                from: "You",
                                message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
                            }
                        }]}
                />
                <ChatList
                    title="Mentors"
                    chatList={mentorsDummy}
                />
            </div>

        </div>
    )
}

export default ChatsUi