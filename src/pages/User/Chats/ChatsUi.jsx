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
        profilePic: "", userName: "Nada Abdelnasser2",
        lastMessage:
        {
            from: "Nada Abdelnasser2",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser3",
        lastMessage:
        {
            from: "Nada Abdelnasser3",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser4",
        lastMessage:
        {
            from: "Nada Abdelnasser4",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser5",
        lastMessage:
        {
            from: "Nada Abdelnasser5",
            message: "Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy"
        }
    },
    {
        profilePic: "", userName: "Nada Abdelnasser6",
        lastMessage:
        {
            from: "Nada Abdelnasser6",
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