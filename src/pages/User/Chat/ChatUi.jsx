import React from 'react'
import { PopChatCard } from '../../../components/ui'
import ChatHeader from './ChatHeader'
import { InputBar, MessagesList } from '../../../components/chat'

const ChatUi = (props) =>
{
    const {
        messages,
        openedUserData,
        submitTextMessage,
        handleUploadMedia,
        isLoadingUploadMedia,
    } = props;

    return (
        <PopChatCard
            header={<ChatHeader userData={openedUserData} />}
            inputBar={
                <InputBar
                    submitTextMessage={submitTextMessage}
                    handleUploadMedia={handleUploadMedia}
                    isLoadingUploadMedia={isLoadingUploadMedia}
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