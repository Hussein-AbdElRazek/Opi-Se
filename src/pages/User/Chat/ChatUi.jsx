import React from 'react'
import { PopChatCard } from '../../../components/ui'
import ChatHeader from './ChatHeader'
import { InputBar, MessagesList } from '../../../components/chat'

const ChatUi = (props) =>
{
    const { messages, openedUserData, submitTextMessage } = props;
    return (
        <PopChatCard
            header={<ChatHeader userData={openedUserData} />}
            inputBar={
                <InputBar
                    submitTextMessage={submitTextMessage}
                />
            }
        >
            <MessagesList
                messages={messages}
            />

        </PopChatCard>
    )
}

export default ChatUi