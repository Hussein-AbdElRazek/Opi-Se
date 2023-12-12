import React from 'react'
import { Message } from './Message'
import { RepliedMessage } from './RepliedMessage'
import { MessagesDate } from './MessagesDate'

export const MessagesList = ({ messages }) =>
{
    return (
        <div>
            <MessagesDate >
                Today
            </MessagesDate>
            {messages.map((message) =>
            {
                if (message.type === "text")
                {
                    if (!message.isReply)
                    {
                        return (
                            <Message
                                date={message.date}
                                type={message.from === "you" ? "sent" : "received"}
                                seen={message.isSeen}
                                key={message._id}
                            >
                                {message.message}
                            </Message>
                        )
                    } else
                    {
                        return (
                            <RepliedMessage
                                date={message.date}
                                type={message.from === "you" ? "sent" : "received"}
                                seen={message.isSeen}
                                messageRepliedOn={message.messageRepliedOn}
                                replyOn={message.replyOn}
                            >
                                {message.message}
                            </RepliedMessage>
                        )
                    }
                }
                return (<></>)
            })}
        </div>
    )
}
