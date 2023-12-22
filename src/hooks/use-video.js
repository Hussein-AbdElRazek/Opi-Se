import { useEffect } from "react";
import io from "socket.io-client";

const useVideo = () =>
{
    // connect socket
    const socket = io.connect("https://graduation-project-j6gl.onrender.com");

    // join match room, listen to new messages, listen to messageDeleted
    useEffect(() =>
    {
        // join match room
        // socket.emit("joinMatchRoom", {}, (res) =>
        // {
        //     console.log('joinMatchRoom', res)
        // })
    }, [socket])

    const callUser = (body, getResponse) =>
    {
        socket.emit("callUser", body, (res) =>
        {
            console.log('callUser', res)
            getResponse(res)
        })
    }
    const answerCall = (body, getResponse) =>
    {
        socket.emit("answerCall", body, (res) =>
        {
            console.log('answerCall', res)
            getResponse(res)
        })
    }
    const disconnect = (body, getResponse) =>
    {
        socket.emit("disconnect", body, (res) =>
        {
            console.log('disconnect', res)
            getResponse(res)
        })
    }

    return {
        callUser,
        answerCall,
        disconnect,
    }
}

export default useVideo;