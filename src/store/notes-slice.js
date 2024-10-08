import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mergeToUnique } from '../helpers/mergeToUnique';
import baseSocket from '../sockets/baseConnection';
import { notesInitialValues } from '../components/notes/notesInputsData';

// get connection 
const socket = baseSocket;

// sockets:
// add
export const emitAddNote = createAsyncThunk(
    'notes/emitAddNote',
    async (payload) =>
    {
        socket.emit('addNote', payload, () => { });
    }
);
export const listenToGetNote = createAsyncThunk(
    "notes/listenToGetNote",
    async (_, thunkAPI) =>
    {
        socket.on('getNote', (data) =>
        {
            //  update state
            thunkAPI.dispatch(
                notesActions.addNote({ ...data.data, updatedAt: data?.data?.createdAt })
            );
        });
    }
)

// update
export const emitUpdateNote = createAsyncThunk(
    'notes/emitUpdateNote',
    async (payload) =>
    {
        socket.emit('updateNote', payload, (res) => { });
    }
);
export const listenToUpdateNote = createAsyncThunk(
    "notes/listenToUpdateNote",
    async (_, thunkAPI) =>
    {
        socket.on('getUpdatedNote', (data) =>
        {
            //  update state
            thunkAPI.dispatch(
                notesActions.updateNote(data.data)
            );
        });
    }
)

// pin
export const emitPinNote = createAsyncThunk(
    'notes/emitPinNote',
    async (payload) =>
    {
        socket.emit('pinNote', payload, () => { });
    }
);
export const listenToPinNote = createAsyncThunk(
    "notes/listenToPinNote",
    async (_, thunkAPI) =>
    {
        socket.on('notePinned', (data) =>
        {
            console.log("notePinned", data)
            // update state
            thunkAPI.dispatch(
                notesActions.updateNote(data.data)
            );

            // sort notes
            thunkAPI.dispatch(notesActions.sortNotes());
        });
    }
)

// delete
export const emitDeleteNote = createAsyncThunk(
    'notes/emitDeleteNote',
    async (payload) =>
    {
        socket.emit('deleteNote', payload, () => { });
    }
);
export const listenToNoteDeleted = createAsyncThunk(
    "notes/listenToNoteDeleted",
    async (_, thunkAPI) =>
    {
        socket.on('noteDeleted', (data) =>
        {
            //  update state
            thunkAPI.dispatch(
                notesActions.removeNote(data.data)
            );
        });
    }
)

// delete
export const emitRestoreNote = createAsyncThunk(
    'notes/emitRestoreNote',
    async (payload) =>
    {
        console.log("fire emit restoreNote", payload)

        socket.emit('restoreNote', payload, (res) => { console.log("restoreNote response", res) });
    }
);
export const listenToNoteRestored = createAsyncThunk(
    "notes/listenToNoteRestored",
    async (_, thunkAPI) =>
    {
        socket.on('noteRestored', (data) =>
        {
            const currentPathname = window.location.pathname;
            // console.log("noteRestored", data)
            const restoredNote = { _id: data.data.noteId, ...data.data, }
            // console.log("final restored ", restoredNote)
            //  update state
            // if in notes page add it
            if (currentPathname === "/notes")
            {
                // i reolad page beacuse id i will recieve will changed from database 
                // so i reload to get new one
                window.location.reload();
                // thunkAPI.dispatch(
                //     notesActions.addNote(restoredNote)
                // )
                // thunkAPI.dispatch(
                //     notesActions.sortNotes()
                // )
            }
            // if in trash notes page remove it
            else
            {
                thunkAPI.dispatch(
                    notesActions.removeNote(restoredNote._id)
                )
            }
        });
    }
)


const initialNotesState = {
    notes: [],
    totalPages: 1,
    openedNote: localStorage.getItem("openedNote") ?
        JSON.parse(localStorage.getItem("openedNote")) : notesInitialValues
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
                // Pinned notes: Sort by updatedAt date (latest first)
                if (a.isPinned && b.isPinned)
                {
                    let aPinnedAt = new Date(a.updatedAt);
                    let bPinnedAt = new Date(b.updatedAt);
                    return bPinnedAt.getTime() - aPinnedAt.getTime(); // Latest pinned first
                }

                // Pinned notes come first
                if (a.isPinned && !b.isPinned) return -1; // a should come first
                if (!a.isPinned && b.isPinned) return 1; // b should come first

                // Non-pinned notes: Sort by updatedAt date (latest first)
                let aUpdatedAt = new Date(a.updatedAt);
                let bUpdatedAt = new Date(b.updatedAt);
                return bUpdatedAt.getTime() - aUpdatedAt.getTime(); // Latest created first
            });
        },
        resetNotes(state, action)
        {
            state.notes = [];
            state.totalPages = 1;
        },
        updateOpenedNote(state, action)
        {
            state.openedNote = action.payload;
            localStorage.setItem("openedNote", JSON.stringify(action.payload))
        }
    }
})

export const notesActions = notesSlice.actions

export default notesSlice.reducer;