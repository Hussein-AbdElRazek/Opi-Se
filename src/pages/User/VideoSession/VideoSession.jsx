import React from 'react'
import VideoSessionUi from './VideoSessionUi'
import { useDispatch, useSelector } from 'react-redux';
import { messagesActions } from '../../../store/messages-slice';

const VideoSession = () =>
{
    const id = "testVideoCHat"

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
        <VideoSessionUi
            messages={messages}
            submitTextMessage={submitTextMessage}
        />
    )
}

export default VideoSession