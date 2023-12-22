import { createSlice } from '@reduxjs/toolkit';


const initialMessagesState = {
    messages: JSON.parse(localStorage.getItem("messages")) || {},
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState: initialMessagesState,
    reducers: {
        setMessages(state, action)
        {
            state.messages[action.payload.id] = action.payload.messages;
            localStorage.setItem("messages", JSON.stringify(state.messages))
        },
        updateMessages(state, action)
        {
            if (!!state.messages[action.payload.id])
            {
                //check for duplication
                const isDuplicate = state.messages[action.payload.id].some(msg => JSON.stringify(msg) === JSON.stringify(action.payload.message));
                if (!isDuplicate)
                {
                    state.messages[action.payload.id] = [...state.messages[action.payload.id], action.payload.message]
                }
            } else
            {
                state.messages[action.payload.id] = [action.payload.message]
            }
            localStorage.setItem("messages", JSON.stringify(state.messages))
        }
    }
})


export const messagesActions = messagesSlice.actions

export default messagesSlice.reducer;