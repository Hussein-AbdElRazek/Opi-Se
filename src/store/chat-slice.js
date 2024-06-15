import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { mergeToUnique } from '../helpers/mergeToUnique';
import baseSocket from '../sockets/baseConnection';

// get connection 
const socket = baseSocket;

//Text Message
export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async (payload, thunkAPI) =>
    {
        thunkAPI.dispatch(
            chatActions.addMessage({
                messagesId: payload.messagesId, newMessage: payload.newMessage
            })
        );

        socket.emit('sendMessage', payload.message, (res) =>
        {
            // update id from server
            if (res?.success)
            {
                thunkAPI.dispatch(chatActions.updateMessageId(
                    {
                        _id: res?.data?._id,
                        oldId: payload.newMessage?._id,
                        messagesId: payload.messagesId
                    }))
                thunkAPI.dispatch(chatActions.updateMessage(
                    {
                        updatedMessage: res?.data ,
                        messagesId: payload.messagesId
                    }))
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
            console.log("receiveMessage", data)
            // show new message mark
            thunkAPI.dispatch(chatActions.updateNewMessageMark(true))
        });
    }
)

export const deleteMessage = createAsyncThunk(
    'chat/deleteMessage',
    async (payload, thunkAPI) =>
    {
        console.log("payload.requestBody", payload.requestBody)
            console.log("payload.requestBody", payload.requestBody)

        socket.emit('deleteMessage', payload.requestBody, (res) =>
        {
            console.log("res", res)
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
        console.log("messagesId", messagesId)
        socket.on('messageDeleted', (data) =>
        {
            console.log("messageDeleted.........", data)
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
        {console.log("data",data)
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
        socket.emit('uploadChatMedia', payload, (res) => { console.log("uploadChatMedia res", res) });
    }
);
export const listenToReceiveMedia = createAsyncThunk(
    "chat/listenToReceiveMedia",
    async (payload, thunkAPI) =>
    {
        console.log("listen to reciev meida functionsfdddddddddd")
        socket.on('showMediaInChat', (data) =>
        {
            console.log("media", data)
            // TODO handle it after updated from zoz with id
            // TODO make scroll bottom state here to can scroll from here 
            //  update state
            const imagesList = [];
            data.media.forEach((img) =>
            {
                let temp = {
                    mediaUrl: img,
                    sentAt: new Date().toUTCString(),
                    messageType: "media",
                    _id: img,
                    messageSender: payload
                };
                imagesList.push(temp)
            })
            thunkAPI.dispatch(
                chatActions.updateMessages({
                    id: payload, messages: imagesList
                }))

            // show new message mark
            thunkAPI.dispatch(chatActions.updateNewMessageMark(true))
        });
    }
)

//select from poll 
export const selectFromPoll = createAsyncThunk(
    'chat/selectFromPoll',
    async (payload) =>
    {
        console.log("payload sender", payload);
        socket.emit('selectFromPoll', payload, (res) => { console.log("selectFromPoll sender" , res) });
    }
);
export const listenToPollOptionSelected = createAsyncThunk(
    "chat/listenToPollOptionSelected",
    async (payload, thunkAPI) =>
    {
        socket.on('pollOptionSelected', (res) =>
        {
            //  update state
            // TODO handle it 
            console.log("pollOptionSelected recive", res)
            // const updatedPollAnswers = selectOption(optionSelectors, pollAnswers, optionNumber, optionVotes, myId);
            // thunkAPI.dispatch(
            //     chatActions.updateMessage({
            //         messagesId: payload.messagesId,
            //         _id: res.messageId,
            //         pollAnswers: res.messageId,
            //     }))
        });
    }
)

const initialChatState = {
    messages: {},
    session: {
        status: "",
        startDate: "",
        isLoading: false,
    },
    totalPages: 1,
    newMessageMark: JSON.parse(localStorage.getItem("newMessageMark")) || false
}

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        updateMessages(state, action)
        {
            const updatedArr = mergeToUnique(state.messages[action.payload.id] || [],
                action.payload.messages);

            //sort with date
            updatedArr.sort((a, b) =>
            {
                const dateA = new Date(a.sentAt);
                const dateB = new Date(b.sentAt);
                return dateA - dateB;
            });

            state.messages[action.payload.id] = updatedArr;
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
        },
        updateMessage(state, action)
        {
            state.messages[action.payload.messagesId] = state.messages[action.payload.messagesId].map(ele =>
            {
                if (ele._id === action.payload.updatedMessage._id)
                {
                    return { ...ele, ...action.payload.updatedMessage }
                }
                else return ele;
            })
        },
        deleteMessage(state, action)
        {
            state.messages[action.payload.messagesId] = state.messages[action.payload.messagesId].filter((msg) => msg._id !== action.payload.messageId)
        },
        updateSession(state, action)
        {
            state.session = { ...state.session, ...action.payload };
        },
        updateTotalPages(state, action)
        {
            // to update TotalPages when receive it from server
            state.totalPages = action.payload;
        },
        updateNewMessageMark(state, action)
        {
            // to update NewMessageMark 
            state.newMessageMark = action.payload;
            localStorage.setItem("newMessageMark", JSON.stringify(action.payload))

        },
        updateMessageId(state, action)
        {
            // to update id when receive it from server 
            state.messages[action.payload.messagesId] = state.messages[action.payload.messagesId].map(ele =>
            {
                if (ele._id === action.payload.oldId)
                {
                    return { ...ele, _id: action.payload._id }
                }
                else return ele;
            })
        },
    },
})

export const chatActions = chatSlice.actions

export default chatSlice.reducer;