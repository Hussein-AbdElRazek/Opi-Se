import React from 'react'
import { Message } from './Message'
import { MessageRepliedOn } from './MessageRepliedOn'

export const RepliedMessage = (props) =>
{
    const { date, type, replyOn, messageRepliedOn, children } = props;
    return (

        <Message
            date={date}
            type={type}
        >
            <MessageRepliedOn
                replyOn={replyOn}
                type={type}
            >
                {messageRepliedOn}
            </MessageRepliedOn>
            {children}
        </Message>
    )
}
