import { createSlice } from '@reduxjs/toolkit';
import { mergeToUnique } from '../helpers/mergeToUnique';

const initialNotesState = {
    notes: [],
    totalPages: 1
}

const notesSlice = createSlice({
    name: 'notes',
    initialState: initialNotesState,
    reducers: {
        addNote(state, action)
        {
            state.notes.unshift(action.payload)
        },
        mergeNotes(state, action)
        {
            state.notes = mergeToUnique(state.notes, action.payload);
        },
        removeNote(state, action)
        {
            console.log("action");
            state.notes = state.notes.filter(ele => ele._id !== action.payload)
        },
        updateNote(state, action)
        {
            state.notes = state.notes.map(ele =>
            {
                if (ele._id === action.payload._id)
                {
                    return { ...ele, ...action.payload }
                }
                else return ele;
            })
        },
        updateNoteId(state, action)
        {
            // to update id when receive it from server 
            state.notes = state.notes.map(ele =>
            {
                if (ele._id === action.payload.oldId)
                {
                    return { ...ele, _id: action.payload._id }
                }
                else return ele;
            })
        },
        updateTotalPages(state, action)
        {
            // to update TotalPages when receive it from server
            state.totalPages = action.payload;
        },
    }
})

export const notesActions = notesSlice.actions

export default notesSlice.reducer;