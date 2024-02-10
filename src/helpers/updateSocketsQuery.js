import baseSocket from "../sockets/baseConnection";

const socket = baseSocket;

export const updateSocketQuery = () =>
{
    const matchId = JSON.parse(localStorage.getItem("userData"))?.matchId;
    const token = (localStorage.getItem("token"));
    const userId = JSON.parse(localStorage.getItem("userData"))?._id;

    socket.io.opts.query = {
        matchId: matchId,
        roomId: matchId,
        userId: userId,
        token: token,
    };
    
    socket.disconnect().connect();
}