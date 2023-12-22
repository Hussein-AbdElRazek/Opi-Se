import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { messagesActions } from "../store/messages-slice";
import { useSearchParams } from "react-router-dom";

const useChat = () =>
{
    // connect socket
    const socket = io.connect("https://graduation-project-j6gl.onrender.com?matchId=657b36b4080670483febc675");
    useEffect(() =>
    {
        // join match room
        socket.emit("joinMatchRoom", {}, (res) =>
        {
            console.log('joinMatchRoom', res)
        })
    }, [])
    // listen to new messages, listen to messageDeleted
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userData._id);
    useEffect(() =>
    {
        // listen to new messages and update messages when new message income
        socket.on("receiveMessage", (res) =>
        {
            console.log('receiveMessage', res)
            //handle if receiver is the sender 
            if (res.data.messageSender === userId) return
            const newMessage = {
                _id: new Date().toUTCString(),
                isReply: false,
                sentAt: new Date().toUTCString(),
                isSeen: false,
                ...res.data
            }
            dispatch(messagesActions.updateMessages({ id: newMessage.messageSender, message: newMessage }))
        })

        // listen to messageDeleted
        socket.on("messageDeleted", (res) =>
        {
            console.log('messageDeleted', res)
        })
    }, [socket, dispatch, userId])

    const sendMessage = (body, getResponse) =>
    {
        socket.emit("sendMessage", body, (res) =>
        {
            console.log('sendMessage', res)
            getResponse(res)
        })
    }
    const [searchParams] = useSearchParams();
    const deleteMessage = (body, getResponse) =>
    {
        const messagesId = searchParams.get("id")
        dispatch(messagesActions.deleteMessage({ id: messagesId, messageId: body.id }))
        socket.emit("deleteMessage", body, (res) =>
        {
            console.log('deleteMessage', res)
            getResponse(res)
        })
    }

    const startChatSession = (body, getResponse) =>
    {
        socket.emit("startChatSession", body, (res) =>
        {
            console.log('startChatSession', res)
            getResponse(res)
        })
    }

    const endChatSession = (body, getResponse) =>
    {
        socket.emit("endChatSession", body, (res) =>
        {
            console.log('endChatSession', res)
            getResponse(res)
        })
    }

    const replyToSessionRequest = (body, getResponse) =>
    {
        socket.emit("replyToSessionRequest", body, (res) =>
        {
            console.log('replyToSessionRequest', res)
            getResponse(res)
        })
    }

    const uploadChatMedia = (body, getResponse) =>
    {
        socket.emit("uploadChatMedia", body, (res) =>
        {
            console.log('uploadChatMedia', res)
            getResponse(res)
        })
    }

    return {
        sendMessage,
        deleteMessage,
        startChatSession,
        endChatSession,
        replyToSessionRequest,
        uploadChatMedia,
    }
}

export default useChat;