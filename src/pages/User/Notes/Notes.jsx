import { useSelector } from 'react-redux';

import useAddNote from './hooks/use-add-note'
import useGetNotes from './hooks/use-get-notes';
import { NotesList } from '../../../components/notes';
import { LoadingCenter } from '../../../components/ui';
import NotesBar from './components/NotesBar';
import useCancelAddNote from './hooks/use-cancel-add-note';

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


    return (
        <>
            <NotesList
                notes={notes}
                addNote={handleAddNote}
                cancelAddNote={handleCancelAddNote}
                lastElementRef={lastElementRef}

            />
            {isLoadingGetNotes && <LoadingCenter />}
            <NotesBar />
        </>
    )
}

export default Notes