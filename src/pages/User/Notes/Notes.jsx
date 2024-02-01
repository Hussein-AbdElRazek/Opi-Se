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

// in these page i use Facade design pattern
// bcs it's has many features 
const Notes = () =>
{
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
            />
            {isLoadingGetNotes && <LoadingCenter />}
            <NotesBar />
        </>
    )
}

export default Notes