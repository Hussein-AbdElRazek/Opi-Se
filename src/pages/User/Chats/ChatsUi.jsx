import ChatList from './ChatList';
import { PopChatCard } from '../../../components/ui';
import ChatsHeader from './ChatsHeader';
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
    return (
        <PopChatCard
            header={<ChatsHeader />}
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
        </PopChatCard>
    )
}

export default ChatsUi