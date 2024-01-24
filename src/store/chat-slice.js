import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';

const initialChatState = {
    messages: JSON.parse(localStorage.getItem("messages")) || {},
    connected: false,
}
// get match id from local storage
const matchId = JSON.parse(localStorage.getItem("userData"))?.matchId;
const token = (localStorage.getItem("token"));

//establish connection
let socket;
export const connectSocket = createAsyncThunk('chat/connectSocket',
    async () =>
    {
        socket = io(`https://graduation-project-j6gl.onrender.com?matchId=${matchId}&token=${token}`)
        let connected = false;
        socket.on("connect", () =>
        {
            console.log("socket connected...")
            connected = true;
        })
        return connected;
    }
);

export const joinMatchRoom = createAsyncThunk('chat/joinMatchRoom',
    async () =>
    {
        socket.emit('joinMatchRoom', {}, (res) =>
        {
            console.log('joinMatchRoom', res)
        });
    }
);

//Text Message
export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async (payload, thunkAPI) =>
    {
        console.log("payload.message", payload.message)
        socket.emit('sendMessage', payload.message, (res) =>
        {
            console.log('sendMessage', res)
        });
        console.log("payload", payload)
        thunkAPI.dispatch(
            chatActions.addMessage({
                messagesId: payload.messagesId, newMessage: payload.newMessage
            })
        );
    }
);
export const listenToReceiveMessage = createAsyncThunk(
    "chat/listenToReceiveMessage",
    async (_, thunkAPI) =>
    {
        console.log("listenToReceiveMessage")

        socket.on('receiveMessage', (data) =>
        {
            console.log("receiveMessage", data)
            //  update state
            const newMessage = {
                _id: new Date().toUTCString(),
                isReply: false,
                sentAt: new Date().toUTCString(),
                isSeen: false,
                ...data.data
            }

            thunkAPI.dispatch(
                chatActions.addMessage({
                    messagesId: newMessage.messageSender, newMessage: newMessage
                })
            );
        });
    }
)

export const deleteMessage = createAsyncThunk(
    'chat/deleteMessage',
    async (payload, thunkAPI) =>
    {
        socket.emit('deleteMessage', payload.requestBody, (res) =>
        {
            console.log('deleteMessage', res)
            thunkAPI.dispatch(
                chatActions.deleteMessage({
                    messagesId: payload.messagesId, messageId: payload.requestBody.messageId
                })
            );
        });

    }
);
export const listenToDeleteMessage = createAsyncThunk(
    "chat/listenToDeleteMessage",
    async (messagesId, thunkAPI) =>
    {
        console.log("listenToDeleteMessage")

        socket.on('messageDeleted', (data) =>
        {
            console.log("messageDeleted", data)
            //  update state

            thunkAPI.dispatch(
                chatActions.deleteMessage({
                    messagesId, messageId: data
                })
            );
        });
    }
)

//Chat session
export const startChatSession = createAsyncThunk(
    'chat/startChatSession',
    async (payload, thunkAPI) =>
    {
        console.log("payload.message", payload.message)
        socket.emit('startChatSession', { chatSessionRequest: true }, (res) =>
        {
            console.log('startChatSession', res)
        });
        console.log("payload", payload)
        //TODO handle state actions
        // thunkAPI.dispatch(
        //     chatActions.addMessage({
        //         messagesId: payload.messagesId, message: payload.newMessage
        //     })
        // );
    }
);
export const listenToStartChatSession = createAsyncThunk(
    "chat/listenToStartChatSession",
    async (_, thunkAPI) =>
    {
        console.log("listenToStartChatSession")

        socket.on('newChatSessionRequest', (data) =>
        {
            console.log("newChatSessionRequest", data)
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
export const replyChatSession = createAsyncThunk(
    'chat/replyToSessionRequest',
    async (payload, thunkAPI) =>
    {
        console.log("payload.requestBody", payload.requestBody)
        socket.emit('replyToSessionRequest', payload.requestBody, (res) =>
        {
            console.log('replyToSessionRequest', res)
        });
        console.log("payload", payload)
        //TODO handle state actions
        // thunkAPI.dispatch(
        //     chatActions.addMessage({
        //         messagesId: payload.messagesId, message: payload.newMessage
        //     })
        // );
    }
);
export const listenToReplyToSessionRequest = createAsyncThunk(
    "chat/listenToReplyToSessionRequest",
    async (_, thunkAPI) =>
    {
        console.log("listenToReplyToSessionRequest")

        socket.on('replyToRequest', (data) =>
        {
            console.log("replyToRequest", data)
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

export const endChatSession = createAsyncThunk(
    'chat/endChatSession',
    async (payload, thunkAPI) =>
    {
        console.log("payload.requestBody", payload.requestBody)
        socket.emit('endChatSession', payload.requestBody, (res) =>
        {
            console.log('replyToSessionRequest', res)
        });
        console.log("payload", payload)
        //TODO handle state actions
        // thunkAPI.dispatch(
        //     chatActions.addMessage({
        //         messagesId: payload.messagesId, message: payload.newMessage
        //     })
        // );
    }
);

//chat media
export const uploadChatMedia = createAsyncThunk(
    'chat/uploadChatMedia',
    async (payload, thunkAPI) =>
    {
        console.log("payload.requestBody", payload.requestBody)
        socket.emit('uploadChatMedia', payload.requestBody, (res) =>
        {
            console.log('replyToSessionRequest', res)
        });
        console.log("payload", payload)
        //TODO handle state actions
        // thunkAPI.dispatch(
        //     chatActions.addMessage({
        //         messagesId: payload.messagesId, message: payload.newMessage
        //     })
        // );
    }
);

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        setMessages(state, action)
        {
            state.messages[action.payload.id] = action.payload.messages;
            localStorage.setItem("messages", JSON.stringify(state.messages))
        },
        addMessage(state, action)
        {
            if (!!state.messages[action.payload.messagesId])
            {
                //check for duplication
                const isDuplicate = state.messages[action.payload.messagesId].some(msg => JSON.stringify(msg) === JSON.stringify(action.payload.newMessage));
                if (!isDuplicate)
                {
                    console.log("i will put it")
                    state.messages[action.payload.messagesId] = [...state.messages[action.payload.messagesId], action.payload.newMessage]
                }
            } else
            {
                console.log("i will put it")

                state.messages[action.payload.messagesId] = [action.payload.newMessage]
            }
            localStorage.setItem("messages", JSON.stringify(state.messages))
        },
        deleteMessage(state, action)
        {
            state.messages[action.payload.messagesId] = state.messages[action.payload.messagesId].filter((msg) => msg._id !== action.payload.messageId)
            localStorage.setItem("messages", JSON.stringify(state.messages))
        },
    }, extraReducers: (builder) =>
    {
        builder
            .addCase(connectSocket.fulfilled, (state) =>
            {
                state.connected = true;
            })
    },
})


export const chatActions = chatSlice.actions

export default chatSlice.reducer;