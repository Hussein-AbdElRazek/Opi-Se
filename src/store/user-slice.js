import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import baseSocket from '../sockets/baseConnection';
import { updateSocketQuery } from '../helpers/updateSocketsQuery';

const initialUserState = {
}



// get connection 
const socket = baseSocket;

export const joinUserRoom = createAsyncThunk('user/joinUserRoom',
    async () =>
    {
        // update query and restart socket connection
        updateSocketQuery();
        
        socket.emit('joinUserRoom', {}, (res) =>
        {
            console.log('joinUserRoom', res)
        });
    }
);

export const listenToShowNotificationMark = createAsyncThunk(
    "user/listenToShowNotificationMark",
    async (_, thunkAPI) =>
    {
        console.log("listenToShowNotificationMark")

        socket.on('showNotificationMark', (data) =>
        {
            console.log("showNotificationMark", data)
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
export const listenToLeaveRoom = createAsyncThunk(
    "user/listenToLeaveRoom",
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
export const listenToMatchRequestApproved = createAsyncThunk(
    "user/listenToMatchRequestApproved",
    async (_, thunkAPI) =>
    {
        console.log("listenToMatchRequestApproved")

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

export const notifyUserRoom = createAsyncThunk('user/notifyUserRoom',
    async (roomId) =>
    {
        // const userRoomSocket = io(`${backendUrl}?roomId=1`)
        //TODO sure it;s work
        socket.io.opts.query = {
            roomId: roomId,
        };
        socket.disconnect()
        socket.connect();
        socket.on("connect", () =>
        {
            socket.emit('notifyUserRoom', {}, (res) =>
            {
                console.log('notifyUserRoom', res)
            });
        })

    }
);
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
})


export const userActions = userSlice.actions

export default userSlice.reducer;