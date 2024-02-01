import { useDispatch } from "react-redux";
import { notesActions } from "../../../../store/notes-slice";

const useCancelAddNote = () =>
{
    const dispatch = useDispatch();
    const handleCancelAddNote = (noteId) => () =>
    {
        console.log("noteId", noteId)

        dispatch(notesActions.removeNote(noteId));
    }
    return {
        handleCancelAddNote
    }
}

export default useCancelAddNote;