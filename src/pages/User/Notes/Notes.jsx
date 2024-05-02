import { useSelector } from 'react-redux';

import useGetNotes from './hooks/use-get-notes';
import { NotesList } from '../../../components/notes';
import { LoadingCenter } from '../../../components/ui';
import usePinNote from './hooks/use-pin-note';
import useMoveNoteToTrash from './hooks/use-move-note-to-trash';
import useResetNotesSlice from '../../../hooks/use-reset-notes-slice';
import VectorAndText from '../../../components/common/VectorAndText';
import noNotesImg from '../../../assets/images/noNotes.png'
import useNoteListeners from './hooks/use-note-listeners';
import NotesMenu from './components/NotesMenu';
import { Outlet } from 'react-router-dom';

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

    // pin note 
    const { handlePinNote } = usePinNote();

    // move note to trash
    const { handleMoveNoteToTrash } = useMoveNoteToTrash();

    // notes socket listeners
    useNoteListeners();

    return (
        <>
            <NotesMenu />
            <NotesList
                notes={notes}
                lastElementRef={lastElementRef}
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

            
            <Outlet />
        </>
    )
}

export default Notes