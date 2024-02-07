import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';
import { backendUrl } from '../config';

const initialMatchState = {
    connected: false,
}
// get match id from local storage
const matchId = JSON.parse(localStorage.getItem("userData"))?.matchId;
const token = (localStorage.getItem("token"));

//establish connection
let socket;
export const connectMatchSocket = createAsyncThunk('match/connectSocket',
    async () =>
    {
        socket = io(`${backendUrl}?matchId=${matchId}&token=${token}`)
        let connected = false;
        socket.on("connect", () =>
        {
            console.log("socket connected...")
            connected = true;
        })
        return connected;
    }
);

export const disMatch = createAsyncThunk('match/disMatch',
    async () =>
    {
        socket.emit('disMatch', {}, (res) =>
        {
            console.log('disMatch', res)
        });
    }
);
export const listenToLeaveRoom = createAsyncThunk(
    "match/listenToLeaveRoom",
    async (_, thunkAPI) =>
    {
        console.log("listenToLeaveRoom")

        socket.on('leaveRoom', (data) =>
        {
            console.log("leaveRoom", data)
            //  update state

            //TODO handle state actions
            // thunkAPI.dispatch(
            //     chatActions.deleteMessage({
            //         messagesId, messageId: data
            //     })
            // );
        });
    }
)

export const acceptPartnerRequest = createAsyncThunk('match/acceptPartnerRequest',
    async (body) =>
    {
        socket.emit('acceptPartnerRequest', body, (res) =>
        {
            console.log('acceptPartnerRequest', res)
        });
    }
);

export const joinMatchRoom = createAsyncThunk('match/joinMatchRoom',
    async () =>
    {
        socket.emit('joinMatchRoom', {}, (res) =>
        {
            console.log('joinMatchRoom', res)
        });
    }
);

export const listenToMatchRequestApproved = createAsyncThunk(
    "match/listenToShowNotificationMark",
    async (_, thunkAPI) =>
    {
        console.log("listenToShowNotificationMark")

        socket.on('matchRequestApproved', (data) =>
        {
            console.log("matchRequestApproved", data)
            //  update state

            //TODO handle state actions
            // thunkAPI.dispatch(
            //     chatActions.deleteMessage({
            //         messagesId, messageId: data
            //     })
            // );
        });
    }
)

const matchSlice = createSlice({
    name: 'match',
    initialState: initialMatchState,
    extraReducers: (builder) =>
    {
        builder
            .addCase(connectMatchSocket.fulfilled, (state) =>
            {
                state.connected = true;
            })
    },
})


export const matchActions = matchSlice.actions

export default matchSlice.reducer;