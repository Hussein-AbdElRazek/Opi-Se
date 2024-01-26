import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';


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
        socket.emit('sendMessage', payload.message, ({ success }) =>
        {
            if (success)
            {
                thunkAPI.dispatch(
                    chatActions.addMessage({
                        messagesId: payload.messagesId, newMessage: payload.newMessage
                    })
                );
            }
        });
    }
);
export const listenToReceiveMessage = createAsyncThunk(
    "chat/listenToReceiveMessage",
    async (_, thunkAPI) =>
    {
        socket.on('receiveMessage', (data) =>
        {
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
        socket.emit('deleteMessage', payload.requestBody, () =>
        {
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
        socket.on('messageDeleted', (data) =>
        {
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
    async (_, thunkAPI) =>
    {
        thunkAPI.dispatch(chatActions.updateSession({ isLoading: true }))
        socket.emit('startChatSession', { chatSessionRequest: true }, (res) =>
        {
            if (res.success)
            {
                thunkAPI.dispatch(chatActions.updateSession({
                    isLoading: false,
                    status: "waiting"
                }))
            } else
            {
                thunkAPI.dispatch(chatActions.updateSession({
                    isLoading: false,
                    status: ""
                }))
            }
        });
    }
);
export const listenToStartChatSession = createAsyncThunk(
    "chat/listenToStartChatSession",
    async (_, thunkAPI) =>
    {
        socket.on('newChatSessionRequest', (data) =>
        {
            if (data?.chatSessionRequest)
            {
                thunkAPI.dispatch(chatActions.updateSession({
                    isLoading: false,
                    status: "newRequest"
                }))
            }
        });
    }
)

export const replyChatSession = createAsyncThunk(
    'chat/replyToSessionRequest',
    async (payload, thunkAPI) =>
    {
        thunkAPI.dispatch(chatActions.updateSession({
            isLoading: true,
            status: payload.accept ? "accepting" : "rejecting"
        }))

        socket.emit('replyToSessionRequest', payload, () =>
        {
            if (payload.accept)
            {
                thunkAPI.dispatch(chatActions.updateSession({
                    isLoading: false,
                    status: "running",
                    startDate: new Date().toUTCString()
                }))
            } else
            {
                thunkAPI.dispatch(chatActions.updateSession({
                    isLoading: false,
                    status: "",
                }))
            }
        });
    }
);
export const listenToReplyToSessionRequest = createAsyncThunk(
    "chat/listenToReplyToSessionRequest",
    async (_, thunkAPI) =>
    {
        socket.on('replyToRequest', ({ data }) =>
        {
            thunkAPI.dispatch(chatActions.updateSession({
                isLoading: false,
                status: data.accept ? "running" : "",
                startDate: data.accept ? new Date().toUTCString() : ""
            }))
        });
    }
)

export const endChatSession = createAsyncThunk(
    'chat/endChatSession',
    async (payload, thunkAPI) =>
    {
        thunkAPI.dispatch(chatActions.updateSession({
            isLoading: true,
        }))
        socket.emit('endChatSession', payload, ({ success }) =>
        {
            if (success)
            {
                thunkAPI.dispatch(chatActions.updateSession({
                    isLoading: false,
                    status: "",
                    startDate: ""
                }))
            }
        });
    }
);
export const listenToEndToSessionRequest = createAsyncThunk(
    "chat/listenToEndToSessionRequest",
    async (_, thunkAPI) =>
    {
        socket.on('terminateSession', ({ message }) =>
        {
            if (message === "session was ended by your partner !") thunkAPI.dispatch(chatActions.updateSession({
                isLoading: false,
                status: "",
                startDate: ""
            }))
        });
    }
)

//chat media
export const uploadChatMedia = createAsyncThunk(
    'chat/uploadChatMedia',
    async (payload, thunkAPI) =>
    {
        console.log("payload", payload)
        socket.emit('uploadChatMedia', payload, (res) => { });
    }
);
export const listenToReceiveMedia = createAsyncThunk(
    "chat/listenToReceiveMedia",
    async (payload, thunkAPI) =>
    {
        socket.on('showMediainChat', ({ media }) =>
        {
            //  update state
            const imagesList = [];
            media.forEach((img) =>
            {
                let temp = {
                    mediaUrl: img,
                    sentAt: new Date().toUTCString(),
                    messageType: "img",
                    _id: img,
                    messageSender: payload
                };
                imagesList.push(temp)
            })
            thunkAPI.dispatch(
                chatActions.updateMessages({
                    id: payload, messages: imagesList
                }))
        });
    }
)

const initialChatState = {
    messages: JSON.parse(localStorage.getItem("messages")) || {},
    session: JSON.parse(localStorage.getItem("session")) || {
        status: "",
        startDate: "",
        isLoading: false,
    },
    connected: false,
}

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        updateMessages(state, action)
        {
            const existingMessages = new Set(state.messages[action.payload.id]?.map(message => message._id));
            const uniqueMessages = action.payload.messages.filter(message => !existingMessages.has(message._id));

            const updatedArr = [...state.messages[action.payload.id] || [], ...uniqueMessages];

            updatedArr.sort((a, b) =>
            {
                const dateA = new Date(a.sentAt);
                const dateB = new Date(b.sentAt);
                return dateA - dateB;
            });

            state.messages[action.payload.id] = updatedArr;
            localStorage.setItem("messages", JSON.stringify(state.messages));
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
        updateSession(state, action)
        {
            state.session = { ...state.session, ...action.payload };
            localStorage.setItem("session", JSON.stringify(state.session))
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