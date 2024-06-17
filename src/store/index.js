
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import chatReducer from './chat-slice';
import userReducer from './user-slice';
import notesReducer from './notes-slice';
import tasksReducer from './tasks-slice';
import uiReducer from './ui-slice';
import searchReducer from './search-slice';
import questionsReducer from './questions-slice';
import matchReducer from './match-slice';
import recommendationReducer from './recommendation-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        chat: chatReducer,
        user: userReducer,
        notes: notesReducer,
        tasks: tasksReducer,
        ui: uiReducer,
        search: searchReducer,
        questions: questionsReducer,
        match: matchReducer,
        recommendation: recommendationReducer,
    }
});

export default store;