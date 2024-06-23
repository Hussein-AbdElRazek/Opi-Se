import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import baseSocket from '../sockets/baseConnection';
import { updateSocketQuery } from '../helpers/updateSocketsQuery';
import { authActions } from './auth-slice';
import { userActions } from './user-slice';
import { mergeToUnique } from '../helpers/mergeToUnique';
import { chatActions } from './chat-slice';

const initialMatchState = {
    connected: false,
    joinedMatchRoom: 0,
    requests: [],
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
            thunkAPI.dispatch(
                chatActions.clearMessages()
            );

            // make notification
            thunkAPI.dispatch(userActions.updateNewNotificationMark(true))

            // if open chats navigate home
            if (window.location.pathname.includes("chat")) window.location.href = "/";
        });
    }
)

export const acceptPartnerRequest = createAsyncThunk('match/acceptPartnerRequest',
    async (body, thunkAPI) =>
    {
        console.log("call acceptPartnerRequest", body)

        // update match data and join match room
        thunkAPI.dispatch(authActions.updateUserData({
            matchId: body.socketReqBody.matchId,
            alreadyRequestedMe: false,
            alreadyRequestedHim: false,
            partnerId: {
                _id: body.requestData._id,
                userName: body.requestData.userName,
                profileImage: body.requestData.profileImage
            }
        }))

        thunkAPI.dispatch(joinMatchRoom());

        socket.emit('acceptPartnerRequest', body.socketReqBody, (res) =>
        {
            console.log('acceptPartnerRequest res', res)
            window.location.reload();

        });
    }
);

export const joinMatchRoom = createAsyncThunk('match/joinMatchRoom',
    async (_, thunkAPI) =>
    {
        // update query and restart socket connection
        const authState = thunkAPI.getState(state => state).auth;
        updateSocketQuery(authState);

        socket.emit('joinMatchRoom', {}, (res) =>
        {
            console.log('joinMatchRoom', res)
            thunkAPI.dispatch(matchActions.markJoinedMatchRoom())
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

            thunkAPI.dispatch(authActions.updateUserData({
                matchId: data.matchId,
                partnerId: {
                    _id: data.partnerId,
                    userName: data.partnerUserName,
                    profileImage: data.partnerImage
                },
                alreadyRequestedMe: false,
                alreadyRequestedHim: false,
                isAvailable: false,
            }))
            thunkAPI.dispatch(joinMatchRoom());

            thunkAPI.dispatch(
                userActions.updateNewNotificationMark(true)
            );
            window.location.reload();
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
        markJoinedMatchRoom(state)
        {
            state.joinedMatchRoom += 1;
        }
    }
})


export const matchActions = matchSlice.actions

export default matchSlice.reducer;