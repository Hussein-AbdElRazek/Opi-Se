import React, { useEffect } from 'react'
import ChatUi from './ChatUi'
import { useDispatch, useSelector } from 'react-redux'
import { messagesActions } from '../../../store/messages-slice';
import { useSearchParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import useChat from '../../../hooks/use-chat';

const Chat = () =>
{
    const [searchParams] = useSearchParams();
    const openedUserData = {
        userName: searchParams.get("userName"),
        profileImage: searchParams.get("profileImage"),
        id: searchParams.get("id"),
        status: ""
    }
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages[openedUserData.id]) || [];
    const userId = useSelector(state => state.auth.userData._id);

    const { sendMessage } = useChat();
    const submitTextMessage = (values, { resetForm }) =>
    {
        if (values.message.trim() === "") return
        const sentMessage = {
            messageSender: userId,
            messageType: "text",
            messageContent: values.message.trim(),
        }
        const newMessage = {
            _id: new Date().toUTCString(),
            isReply: false,
            sentAt: new Date().toUTCString(),
            isSeen: false,
            ...sentMessage
        }
        sendMessage(sentMessage, () => { })
        dispatch(messagesActions.updateMessages({ id: openedUserData.id, message: newMessage }))
        resetForm();
    }

    const {
        isLoading: isLoadingGetChatData,
        sendRequest: getChatData
    } = useHttp();
    const {
        isLoading: isLoadingGetChatMedia,
        sendRequest: getChatMedia
    } = useHttp();

    const matchId = useSelector((state) => state.auth.userData.matchId)

    const handleGetChatData = () =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                dispatch(messagesActions.setMessages({ id: openedUserData.id, messages: data }))
            }
        };

        getChatData(
            {
                url: `getPartnerChat?matchId=${matchId}&page=1&limit=100`,
            },
            getResponse
        );
    }

    const handleGetChatMedia = (body) =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                dispatch(messagesActions.setMessages(data))
            }
        };

        getChatMedia(
            {
                url: "getChatMedia?page=1&limit=5",
                body: body,
            },
            getResponse
        );
    }
    console.log("i render")
    useEffect(() =>
    {
        handleGetChatData();
    }, [])
    return (
        <ChatUi
            messages={messages}
            submitTextMessage={submitTextMessage}
            openedUserData={openedUserData}
        // header={}
        />
    )
}


export default Chat