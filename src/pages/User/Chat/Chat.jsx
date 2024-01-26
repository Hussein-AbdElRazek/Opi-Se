import React, { useCallback, useContext, useEffect } from 'react'
import ChatUi from './ChatUi'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

import
{
    chatActions,
    connectSocket,
    joinMatchRoom,
    sendMessage,
    listenToReceiveMessage,
    listenToDeleteMessage,
    uploadChatMedia,
    listenToReceiveMedia,
    listenToStartChatSession,
    listenToReplyToSessionRequest,
    listenToEndToSessionRequest
} from '../../../store/chat-slice';
import useHttp from '../../../hooks/use-http';
import ImagesContext from '../../../imagesStore/images-context';

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
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                dispatch(chatActions.updateMessages({ id: openedUserData.id, messages: data }))
            }
        };

        getChatData(
            {
                url: `getPartnerChat?matchId=${matchId}&page=1&limit=100`,
            },
            getResponse
        );
    }, [dispatch, getChatData, matchId, openedUserData.id])

    const handleGetChatMedia = useCallback(() =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message === "success")
            {
                const imagesList = []
                data.forEach((img) =>
                {
                    let temp = img;
                    temp.messageType = "img"
                    imagesList.push(temp)
                })
                dispatch(chatActions.updateMessages({ id: openedUserData.id, messages: imagesList }))
            }
        };

        getChatMedia(
            {
                url: `getChatMedia?page=1&limit=50&matchId=${matchId}`,
            },
            getResponse
        );
    }, [dispatch, getChatMedia, matchId, openedUserData.id])

    console.log("i render")
    useEffect(() =>
    {
        console.log("i handleGetChatData")

        handleGetChatData();
        handleGetChatMedia();
    }, [])
    // useEffect(() =>
    // {
    //     console.log("i handleGetChatMedia")

    //     handleGetChatMedia();
    // }, [handleGetChatMedia])

    useEffect(() =>
    {
        console.log("useEffect.connectSocket")
        dispatch(connectSocket());
        dispatch(joinMatchRoom());
    }, [dispatch])

    //All chat listener
    useEffect(() =>
    {
        //Messages listener
        dispatch(listenToReceiveMessage());
        dispatch(listenToDeleteMessage(searchParams.get("id")));

        //Media listener
        dispatch(listenToReceiveMedia(searchParams.get("id")));

        //Session listener
        dispatch(listenToStartChatSession());
        dispatch(listenToReplyToSessionRequest());
        dispatch(listenToEndToSessionRequest());
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

    return (
        <ChatUi
            messages={messages}
            submitTextMessage={submitTextMessage}
            openedUserData={openedUserData}
            handleUploadMedia={handleUploadMedia}
            isLoadingUploadMedia={isLoadingUploadMedia}
        // header={}
        />
    )
}

export default Chat