import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatUi from './ChatUi'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

import
{
    chatActions,
    sendMessage,
    listenToDeleteMessage,
    uploadChatMedia,
} from '../../../store/chat-slice';
import useHttp from '../../../hooks/use-http';
import ImagesContext from '../../../imagesStore/images-context';
import useGetChat from './hooks/use-get-chat';
import { uiActions } from '../../../store/ui-slice';

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

    // // Scroll to bottom  first time only and new message add
    const scrollToBottom = () =>
    {
        if (messageContainerRef.current)
        {
            messageContainerRef.current?.lastElementChild
                ?.scrollIntoView();
        }
    };
    const [isScrollToBottom, setIsScrollToBottom] = useState(false);
    useEffect(() =>
    {
        if (isScrollToBottom)
        {
            setIsScrollToBottom(false)
            scrollToBottom();
        }
    }, [isScrollToBottom]);

    const messageContainerRef = useRef();
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
            newMessage: newMessage,
        }
        dispatch(sendMessage(payload))
        setIsScrollToBottom(true);
        resetForm();
    }

    const submitPollMessage = (values) =>
    {
        const sentPollMessage = {
            messageSender: userId,
            messageType: "poll",
            ...values
        }
        const newPollMessage = {
            _id: new Date().toUTCString(),
            sentAt: new Date().toUTCString(),
            ...sentPollMessage
        }
        const payload = {
            message: sentPollMessage,
            messagesId: openedUserData.id.toString(),
            newMessage: newPollMessage,
        }
        dispatch(sendMessage(payload))
        setIsScrollToBottom(true);
        // close poll 
        dispatch(uiActions.closePopMenu("chatMenu"))
        dispatch(uiActions.closePopMenu("chatMenu"))
    }

    const matchId = useSelector((state) => state.auth.userData.matchId)

    // handle get chat data (messages)
    const {
        isLoadingGetChat,
        lastElementRef: firstElementRef,
    } = useGetChat(setIsScrollToBottom);

    //listenToDeleteMessage
    useEffect(() =>
    {
        dispatch(listenToDeleteMessage(searchParams.get("id")));
    }, [dispatch, searchParams])

    // Upload Media
    const imgCtx = useContext(ImagesContext);
    const {
        isLoading: isLoadingUploadMedia,
        sendRequest: uploadMedia
    } = useHttp();

    const handleUploadMedia = () =>
    {
        const images = imgCtx.images[openedUserData.id];

        const submitData = new FormData();

        for (const image of images)
        {
            submitData.append("chatMedia", image.file)
        }
        const getResponse = ({ success, data }) =>
        {
            if (success)
            {
                // send images in socket
                dispatch(uploadChatMedia({ media: data }));

                // update store
                const imagesList = [];
                data.forEach((img) =>
                {
                    let temp = {
                        mediaUrl: img,
                        sentAt: new Date().toUTCString(),
                        messageType: "img",
                        _id: img,
                        messageSender: userId
                    };
                    imagesList.push(temp)
                })
                dispatch(chatActions.updateMessages({ id: openedUserData.id, messages: imagesList }))

                imgCtx.deleteAllImages();
            }
        };

        uploadMedia(
            {
                url: `uploadChatMedia?matchId=${matchId}`,
                method: "POST",
                body: submitData,
                contentType: "form-data"
            },
            getResponse
        );
    }
    // remove NewMessageMark
    useEffect(() =>
    {
        dispatch(chatActions.updateNewMessageMark(false));
    }, [dispatch])

    // when new message scroll bottom
    const newMessageMark = useSelector(state => state?.chat?.newMessageMark)
    useEffect(() =>
    {
        if (newMessageMark) scrollToBottom();
    }, [newMessageMark])
    return (
        <ChatUi
            messages={messages}
            submitTextMessage={submitTextMessage}
            openedUserData={openedUserData}
            handleUploadMedia={handleUploadMedia}
            isLoadingUploadMedia={isLoadingUploadMedia}
            firstElementRef={firstElementRef}
            messageContainerRef={messageContainerRef}
            isLoadingGetChat={isLoadingGetChat}
            submitPollMessage={submitPollMessage}
        />
    )
}

export default Chat