import React from 'react'
import { Message } from './Message'
import { RepliedMessage } from './RepliedMessage'
import { MessagesDate } from './MessagesDate'
import { useSelector } from 'react-redux'
import { date } from 'yup'

export const MessagesList = ({ messages }) =>
{
    const userId = useSelector(state => state.auth.userData._id)
    return (
        <div>
            <MessagesDate >
                Today
            </MessagesDate>
            {messages.map((message) =>
            {
                if (message.messageType === "text")
                {
                    // if (!message.isReply)
                    // {
                    return (
                        <Message
                            date={new Date(message.sentAt).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                            type={message.messageSender === userId ? "sent" : "received"}
                            seen={message.isSeen}
                            key={message._id}
                        >
                            {message.messageContent}
                        </Message>
                    )
                    // }
                    //  else
                    // {
                    //     return (
                    //         <RepliedMessage
                    //             date={message.date}
                    //             type={message.from === "you" ? "sent" : "received"}
                    //             seen={message.isSeen}
                    //             messageRepliedOn={message.messageRepliedOn}
                    //             replyOn={message.replyOn}
                    //         >
                    //             {message.message}
                    //         </RepliedMessage>
                    //     )
                    // }
                }
                return (<></>)
            })}
        </div>
    )
}
