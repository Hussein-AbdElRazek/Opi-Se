import React, { useCallback, useEffect } from 'react'
import ChatUi from './ChatUi'
import { useDispatch, useSelector } from 'react-redux'
import
    {
        chatActions,
        connectSocket,
        joinMatchRoom,
        sendMessage,
        listenToReceiveMessage,
        listenToDeleteMessage
    } from '../../../store/chat-slice';
import { useSearchParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';

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
    const messages = useSelector(state => state.chat.messages[openedUserData.id]) || [];
    const userId = useSelector(state => state.auth.userData._id);

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
        const payload = {
            message: sentMessage,
            messagesId: openedUserData.id.toString(),
            newMessage: newMessage
        }
        dispatch(sendMessage(payload))
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

    const handleGetChatData = useCallback(() =>
    {
        console.log("useCallback handleGetChatData")

        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                dispatch(chatActions.setMessages({ id: openedUserData.id, messages: data }))
            }
        };

        getChatData(
            {
                url: `getPartnerChat?matchId=${matchId}&page=1&limit=100`,
            },
            getResponse
        );
    }, [dispatch, getChatData, matchId, openedUserData.id])

    const handleGetChatMedia = ((body) =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                dispatch(chatActions.setMessages(data))
            }
        };

        getChatMedia(
            {
                url: "getChatMedia?page=1&limit=5",
                body: body,
            },
            getResponse
        );
    })
    console.log("i render")
    useEffect(() =>
    {
        console.log("i handleGetChatData")

        handleGetChatData();
    }, [handleGetChatData])

    useEffect(() =>
    {
        console.log("useEffect.connectSocket")
        dispatch(connectSocket());
        dispatch(joinMatchRoom());
    }, [dispatch])
    useEffect(()=>{
        dispatch(listenToReceiveMessage());
        dispatch(listenToDeleteMessage(searchParams.get("id")));
    }, [dispatch, searchParams])
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