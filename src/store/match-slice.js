import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import baseSocket from '../sockets/baseConnection';
import { updateSocketQuery } from '../helpers/updateSocketsQuery';

const initialMatchState = {
    connected: false,
}


// get connection 
const socket = baseSocket;

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
        // update query and restart socket connection
        updateSocketQuery();
        
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
})


export const matchActions = matchSlice.actions

export default matchSlice.reducer;