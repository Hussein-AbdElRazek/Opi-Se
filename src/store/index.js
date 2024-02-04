
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import chatReducer from './chat-slice';
import userReducer from './user-slice';
import notesReducer from './notes-slice';
import uiReducer from './ui-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        chat: chatReducer,
        user: userReducer,
        notes: notesReducer,
        ui: uiReducer,
    }
});

export default store;