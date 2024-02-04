import { useSelector } from 'react-redux';

import TrashBar from './components/TrashBar'
import useGetTrashNotes from './hooks/use-get-trash-notes';
import { NotesList } from '../../../components/notes';
import { LoadingCenter } from '../../../components/ui';
import useResetNotesSlice from '../../../hooks/use-reset-notes-slice';

const NotesTrash = () =>
{
    // reset notes slice
    useResetNotesSlice();

    // get notes and store it in the notes store
    const {
        isLoadingGetTrashNotes,
        lastElementRef,
    } = useGetTrashNotes();

    // notes list from store
    const notes = useSelector(state => state.notes.notes);

    // the rest of apis for that module in components
    return (
        <>
            <TrashBar />
            <NotesList
                notes={notes}
                lastElementRef={lastElementRef}
                isTrash={true}
            />

            {isLoadingGetTrashNotes && <LoadingCenter />}
        </>
    )
}

export default NotesTrash