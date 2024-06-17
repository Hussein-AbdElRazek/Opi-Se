import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import baseSocket from '../sockets/baseConnection';
import { updateSocketQuery } from '../helpers/updateSocketsQuery';
import { authActions } from './auth-slice';
import { userActions } from './user-slice';
import { mergeToUnique } from '../helpers/mergeToUnique';

const initialMatchState = {
    connected: false,
    requests:[],
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

// when the other partner un match me 
export const listenToLeaveRoom = createAsyncThunk(
    "match/listenToLeaveRoom",
    async (_, thunkAPI) =>
    {
        socket.on('leaveRoom', (data) =>
        {
            console.log("leaveRoom", data)

            //  update state
            thunkAPI.dispatch(
                authActions.updateUserData({
                    partnerId: null,
                    matchId: null
                })
            );

            // make notification
            thunkAPI.dispatch(userActions.updateNewNotificationMark(true))

            // if open chats navigate home
            if (window.location.pathname.includes("chat")) window.location.href = "/";
        });
    }
)

export const acceptPartnerRequest = createAsyncThunk('match/acceptPartnerRequest',
    async (body) =>
    {
        console.log("call acceptPartnerRequest", body)
        socket.io.opts.query = {

        };
        socket.disconnect()
        socket.connect();
        socket.emit('acceptPartnerRequest', body, (res) =>
        {
            console.log('acceptPartnerRequest res', res)
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
    "match/listenToMatchRequestApproved",
    async (_, thunkAPI) =>
    {

        socket.on('matchRequestApproved', (data) =>
        {
            console.log("matchRequestApproved", data)
            //  update state

            thunkAPI.dispatch(
                authActions.updateUserNotifications({
                    message: `you have a new partner with a new chance don't miss this !`,
                    ...data
                })
            );

            // TODO ask zezo to send patner id
            // update match data and join match room
            thunkAPI.dispatch(authActions.updateUserData({
                matchId: data.matchId,
                partnerId: { _id: data.partnerId || "test", userName: data.partnerUserName, profileImage: data.partnerImage }
            }))
            thunkAPI.dispatch(joinMatchRoom());

            thunkAPI.dispatch(
                userActions.updateNewNotificationMark(true)
            );
        });
    }
)

const matchSlice = createSlice({
    name: 'match',
    initialState: initialMatchState,
    reducers: {
        mergeRequests(state, action)
        {
            state.requests = mergeToUnique(state.requests, action.payload);
        },
        removeRequest(state, action)
        {
            state.requests = state.requests.filter(ele => ele._id !== action.payload)
        },
    }
})


export const matchActions = matchSlice.actions

export default matchSlice.reducer;