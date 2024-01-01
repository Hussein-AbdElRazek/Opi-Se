import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';

const initialUserState = {
    connected: false,
}
// get match id from local storage
const userId = JSON.parse(localStorage.getItem("userData"))?._id;
const token = (localStorage.getItem("token"));

//establish connection
let socket;
export const connectUserSocket = createAsyncThunk('user/connectSocket',
    async () =>
    {
        socket = io(`https://graduation-project-j6gl.onrender.com?userId=${userId}&token=${token}`)
        let connected = false;
        socket.on("connect", () =>
        {
            console.log("socket connected...")
            connected = true;
        })
        return connected;
    }
);

export const joinUserRoom = createAsyncThunk('user/joinUserRoom',
    async () =>
    {
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
    async () =>
    {
        const userRoomSocket = io("https://graduation-project-j6gl.onrender.com/?roomId=1")
        userRoomSocket.emit('notifyUserRoom', {}, (res) =>
        {
            console.log('notifyUserRoom', res)
        });
    }
);
const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    extraReducers: (builder) =>
    {
        builder
            .addCase(connectUserSocket.fulfilled, (state) =>
            {
                state.connected = true;
            })
    },
})


export const userActions = userSlice.actions

export default userSlice.reducer;