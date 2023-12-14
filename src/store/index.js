
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import messagesReducer from './messages-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        messages: messagesReducer,
    }
});

export default store;