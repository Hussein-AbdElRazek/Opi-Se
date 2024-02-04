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
        sortNotes(state)
        {
            state.notes = state.notes.sort((a, b) =>
            {
                // Pinned notes: Sort by pinnedAt date (latest first)
                if (a.isPinned && b.isPinned)
                {
                    let aPinnedAt = new Date(a.pinnedAt);
                    let bPinnedAt = new Date(b.pinnedAt);
                    return bPinnedAt.getTime() - aPinnedAt.getTime(); // Latest pinned first
                }

                // Pinned notes come first
                if (a.isPinned && !b.isPinned) return -1; // a should come first
                if (!a.isPinned && b.isPinned) return 1; // b should come first

                // Non-pinned notes: Sort by createdAt date (latest first)
                let aCreatedAt = new Date(a.createdAt);
                let bCreatedAt = new Date(b.createdAt);
                return bCreatedAt.getTime() - aCreatedAt.getTime(); // Latest created first
            });
        },
        resetNotes(state, action)
        {
            state.notes = [];
            state.totalPages = 1;
        },
    }
})

export const notesActions = notesSlice.actions

export default notesSlice.reducer;