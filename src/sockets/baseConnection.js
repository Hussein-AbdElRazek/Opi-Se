import io from 'socket.io-client';

import { backendUrl } from '../config';
const matchId = JSON.parse(localStorage.getItem("userData"))?.matchId;
const token = (localStorage.getItem("token"));
const userId = JSON.parse(localStorage.getItem("userData"))?._id;

const baseSocket = io(backendUrl, {
    query: {
        matchId: matchId,
        userId: userId,
        roomId: matchId,
        token: token,
    }
});

export default baseSocket;