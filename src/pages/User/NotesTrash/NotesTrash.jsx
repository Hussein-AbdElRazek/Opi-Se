import { useSelector } from 'react-redux';

import TrashBar from './components/TrashBar'
import useGetTrashNotes from './hooks/use-get-trash-notes';
import { NotesList } from '../../../components/notes';
import { LoadingCenter } from '../../../components/ui';
import useResetNotesSlice from '../../../hooks/use-reset-notes-slice';
import VectorAndText from '../../../components/common/VectorAndText';
import noTrashImg from '../../../assets/images/noTrash.png'
import classes from './styles/TrashBar.module.css'
import { useDispatch } from 'react-redux';
import { listenToNoteRestored } from '../../../store/notes-slice';
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

    // listen to restore note
    const dispatch = useDispatch();
    dispatch(listenToNoteRestored());

    return (
        <>
            {!!notes?.length &&<TrashBar />}
            <NotesList
                notes={notes}
                lastElementRef={lastElementRef}
                isTrash={true}
            />
            {isLoadingGetTrashNotes && <LoadingCenter />}
            {(!notes.length && !isLoadingGetTrashNotes) && (
                <div className={classes.noTrash}>
                    <VectorAndText
                        isBig={true}
                        fullScreen={true}
                        img={noTrashImg}
                        h="No Notes in Trash yet"
                        p={
                            <>
                                If there are any notes you no longer need, you can
                                <br />
                                permanently delete them here.
                            </>
                        }
                    />
                </div>

            )}
        </>
    )
}

export default NotesTrash