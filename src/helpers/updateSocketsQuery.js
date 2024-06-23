import baseSocket from "../sockets/baseConnection";

const socket = baseSocket;

export const updateSocketQuery = (authState) =>
{
    // prepare newSocketQuery from state
    const userId = authState?.userData?._id
    const token = authState?.token
    const matchId = authState?.userData?.matchId
    const newSocketQuery = {
        matchId: matchId,
        roomId: matchId,
        userId: userId,
        token: token,
    }
    console.log("newSocketQuery", newSocketQuery)
    socket.io.opts.query = newSocketQuery;

    socket.disconnect();
    socket.connect();
}