import React from 'react'
import { LoadingCenter, PopChatCard } from '../../../components/ui'
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
        firstElementRef,
        messageContainerRef,
        isLoadingGetChat,
        submitPollMessage,
    } = props;

    return (
        <PopChatCard
            header={<ChatHeader userData={openedUserData} />}
            inputBar={
                <InputBar
                    submitTextMessage={submitTextMessage}
                    handleUploadMedia={handleUploadMedia}
                    isLoadingUploadMedia={isLoadingUploadMedia}
                    submitPollMessage={submitPollMessage}
                />
            }
        >
            {isLoadingGetChat && <LoadingCenter />}
            {!!messages.length && (
                <MessagesList
                    messages={messages}
                    firstElementRef={firstElementRef}
                    messageContainerRef={messageContainerRef}
                    isLoadingGetChat={isLoadingGetChat}
                />
            )}

        </PopChatCard>
    )
}

export default ChatUi