import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import baseSocket from '../sockets/baseConnection';
import { updateSocketQuery } from '../helpers/updateSocketsQuery';

const initialUserState = {
    newNotificationMark: JSON.parse(localStorage.getItem("newNotificationMark")) || false
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
        socket.on('showNotificationMark', (data) =>
        {
            console.log("new notification...")
            //  update state
            thunkAPI.dispatch(
                userActions.updateNewNotificationMark(true)
            );
        });
    }
)

// event is used to notify user when send/decline partner request in his room
export const notifyUserRoom = createAsyncThunk('user/notifyUserRoom',
    async (roomId, thunkAPI) =>
    {
        socket.io.opts.query = {
            roomId: roomId,
        };
        socket.disconnect()
        socket.connect();
        socket.emit('notifyUserRoom', {}, (res) =>
        {
            console.log('notifyUserRoom', res)
            thunkAPI.dispatch(joinUserRoom())
        });
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        updateNewNotificationMark(state, action)
        {
            // to update newNotificationMark 
            state.newNotificationMark = action.payload;
            localStorage.setItem("newNotificationMark", JSON.stringify(action.payload))
        }
    }
})


export const userActions = userSlice.actions

export default userSlice.reducer;