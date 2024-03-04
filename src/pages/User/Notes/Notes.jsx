import { useSelector } from 'react-redux';

import useAddNote from './hooks/use-add-note'
import useGetNotes from './hooks/use-get-notes';
import { NotesList } from '../../../components/notes';
import { LoadingCenter } from '../../../components/ui';
import NotesBar from './components/NotesBar';
import useCancelAddNote from './hooks/use-cancel-add-note';
import useMakeNoteEditable from './hooks/use-make-note-editable';
import useEditNote from './hooks/use-edit-note';
import useCancelEditNote from './hooks/use-cancel-edit-note';
import usePinNote from './hooks/use-pin-note';
import useMoveNoteToTrash from './hooks/use-move-note-to-trash';
import useResetNotesSlice from '../../../hooks/use-reset-notes-slice';
import VectorAndText from '../../../components/common/VectorAndText';
import noNotesImg from '../../../assets/images/noNotes.png'
import useNoteListeners from './hooks/use-note-listeners';

// in these page i use Facade design pattern
// bcs it's has many features 
const Notes = () =>
{
    // reset notes slice
    useResetNotesSlice();

    // get notes and store it in the notes store
    const {
        isLoadingGetNotes,
        lastElementRef,
    } = useGetNotes();

    // notes list from store
    const notes = useSelector(state => state.notes.notes);

    //  add note 
    const { handleAddNote } = useAddNote();

    // cancel  add note 
    const { handleCancelAddNote } = useCancelAddNote();

    // make note editable
    const { makeNoteEditable } = useMakeNoteEditable();

    //  edit note 
    const { handleEditNote } = useEditNote();

    // cancel  edit note 
    const { handleCancelEditNote } = useCancelEditNote();

    // pin note 
    const { handlePinNote } = usePinNote();

    // move note to trash
    const { handleMoveNoteToTrash } = useMoveNoteToTrash();

    // notes socket listeners
    useNoteListeners();

    return (
        <>
            <NotesList
                notes={notes}
                addNote={handleAddNote}
                editNote={handleEditNote}
                cancelAddNote={handleCancelAddNote}
                cancelEditNote={handleCancelEditNote}
                lastElementRef={lastElementRef}
                makeNoteEditable={makeNoteEditable}
                pinNote={handlePinNote}
                moveToTrash={handleMoveNoteToTrash}
            />
            {isLoadingGetNotes && <LoadingCenter />}
            {(!notes.length && !isLoadingGetNotes) && (
                <VectorAndText
                    isBig={true}
                    img={noNotesImg}
                    h="No Notes yet"
                    p={
                        <>
                            No notes are available yet. Start creating.
                            <br />
                            your first note.
                        </>
                    }
                />
            )}
            <NotesBar />
        </>
    )
}

export default Notes