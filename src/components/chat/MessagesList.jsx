import { useSelector } from 'react-redux'
import { Fragment, useEffect, useRef } from 'react'

import { Message } from './Message'
import { MessagesDate } from './MessagesDate'
import { getDate } from '../../helpers/getDate'


export const MessagesList = ({ messages }) =>
{
    const userId = useSelector(state => state.auth.userData._id);
    const messageContainerRef = useRef(null);

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

    const scrollToBottom = () =>
    {
        if (messageContainerRef.current)
        {
            messageContainerRef.current.lastElementChild
            .scrollIntoView({ behavior: 'smooth' });
        }
    };

    //TODO handle it with pagination u will remove useEffect bcz if u add old messages
    // u will automatic scroll down 
    
    // Scroll to bottom when messages update
    useEffect(() =>
    {
        scrollToBottom();
    }, [messages]); 
    return (
        <div
            ref={messageContainerRef}
        >
            {messages.map((message, index) =>
            {
                if (message.messageType === "text")
                {
                    return (
                        <Fragment
                            key={message._id}
                        >
                            {renderMessagesDateLabel(index, message?.sentAt)}

                            <Message
                                date={new Date(message.sentAt).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })}
                                type={message.messageSender === userId ? "sent" : "received"}
                                seen={message.isSeen}
                                key={message._id}
                                id={message._id}
                            >
                                {message.messageContent}
                            </Message>
                        </Fragment>
                    )
                }
                return (<></>)
            })}
        </div>
    )
}
