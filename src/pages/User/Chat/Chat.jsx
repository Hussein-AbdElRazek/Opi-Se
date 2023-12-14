import React from 'react'
import ChatUi from './ChatUi'
import { useDispatch, useSelector } from 'react-redux'
import { messagesActions } from '../../../store/messages-slice';
import { useParams } from 'react-router-dom';

const Chat = () =>
{
    const { id } = useParams();

    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages[id]) || [];
    const submitTextMessage = (values, { resetForm }) =>
    {
        if (values.message.trim() === "") return
        const date = new Date();
        const time = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
        const newMessage = {
            _id: Date.now().toLocaleString(),
            type: "text",
            isReply: false,
            date: time,
            from: "you",
            isSeen: false,
            message: values.message.trim(),
        }
        dispatch(messagesActions.updateMessages({ id: id, message: newMessage }))
        resetForm();
    }
    return (
        <ChatUi
            messages={messages}
            submitTextMessage={submitTextMessage}
        // header={}
        />
    )
}

export default Chat