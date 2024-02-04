import { createSlice } from '@reduxjs/toolkit';

const initialNotesState = {
    isPopMenuOpened: {},
    isModalOpened: {},
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialNotesState,
    reducers: {
        openPopMenu(state, action)
        {
            state.isPopMenuOpened[action.payload] = true;
        },
        closePopMenu(state, action)
        {
            state.isPopMenuOpened[action.payload] = false;
        },
        openModal(state, action)
        {
            state.isModalOpened[action.payload] = true;
        },
        closeModal(state, action)
        {
            state.isModalOpened[action.payload] = false;
        },
    }
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer;