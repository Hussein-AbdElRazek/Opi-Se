import { useSelector } from 'react-redux'

import { Message } from './Message'
import { MessagesDate } from './MessagesDate'
import { getDate } from '../../helpers/getDate'
import { PollMessage } from './PollMessage'


export const MessagesList = ({ messages, firstElementRef, messageContainerRef }) =>
{
    const userId = useSelector(state => state.auth.userData._id);

    const renderMessagesDateLabel = (index, messageDate) =>
    {
        let dateLabel = "";
        // when not first message 
        // and messageDate not in the same day of lastMessageDate
        if (index && getDate(messageDate) !== getDate(messages[index - 1].sentAt))
        {
            dateLabel = getDate(messageDate);
        }
        // when first message
        else if (!index)
        {
            dateLabel = getDate(messageDate);
        }
        if (dateLabel)
            return (
                <MessagesDate >
                    {getDate(messageDate)}
                </MessagesDate>
            )
    }

    return (
        <div
            ref={messageContainerRef}
        >
            {messages.map((message, index) =>
            {
                const messageSendType = message.messageSender === userId ? "sent" : "received";

                if (message.messageType === "text" ||
                    message.messageType === "media" ||
                    message.messageType === "poll"
                )
                {
                    return (
                        <div
                            key={message._id}
                            ref={index === 0 ? firstElementRef : null}
                            id={index === messages.length - 1 ? "lastMessage" : null}
                        >
                            {renderMessagesDateLabel(index, message?.sentAt)}

                            <Message
                                date={new Date(message.sentAt).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })}
                                type={messageSendType}
                                seen={message.isSeen}
                                key={message._id}
                                id={message._id}
                                messageType={message.messageType}
                            >
                                {message.messageType === "text" ? message.messageContent
                                    :
                                    message.messageType === "poll" ?
                                        <PollMessage
                                            messageSendType={messageSendType}
                                            pollMessage={message}
                                            key={index}
                                        />
                                        :
                                        <img
                                            src={message.mediaUrl}
                                            alt=""
                                        />}
                            </Message>
                        </div>
                    )
                }
                return (<></>)
            })}
        </div>
    )
}
