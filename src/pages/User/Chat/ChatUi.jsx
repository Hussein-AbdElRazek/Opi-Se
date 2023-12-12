import React from 'react'
import { PopChatCard } from '../../../components/ui'
import ChatHeader from './ChatHeader'
import { MessagesList } from '../../../components/chat'
const dummyHeader = {
    profilePic: "",
    userName: "Nada Abdelnasser",
    status: "typing..."
}
const dummyMessages = [
    {
        _id: 4,
        type: "text",
        isReply: false,
        date: "9:25 PM",
        from: "you",
        isSeen: true,
        message: "hello world",
    },
    {
        _id: 3,
        type: "text",
        isReply: false,
        date: "9:25 PM",
        from: "test",
        isSeen: true,
        message: "hello test",
    },
    {
        type: "text",
        isReply: true,
        date: "9:25 PM",
        from: "you",
        isSeen: true,
        message: "hello world",
        messageRepliedOn: "reply message",
        replyOn: "test",
        _id: 2

    },
    {
        type: "text",
        isReply: true,
        date: "9:25 PM",
        from: "test",
        isSeen: true,
        message: "hello test",
        messageRepliedOn: "reply message",
        replyOn: "you",
        _id: 1
    },
]
const ChatUi = () =>
{
    return (
        <PopChatCard
            header={<ChatHeader userData={dummyHeader} />}
            
        >
            <MessagesList
                messages={dummyMessages}
            />
        </PopChatCard>
    )
}

export default ChatUi