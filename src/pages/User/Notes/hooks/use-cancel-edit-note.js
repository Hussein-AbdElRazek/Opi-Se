import { useDispatch } from "react-redux";
import { notesActions } from "../../../../store/notes-slice";

const useCancelEditNote = () =>
{
    const dispatch = useDispatch();

    const handleCancelEditNote = (noteId, resetForm) => () =>
    {
        // update store
        let noteBeforeEdit = { _id: noteId, isEdit: false };
        dispatch(notesActions.updateNote(noteBeforeEdit));

        // i reset form  bcs values of formik will not changed 
        // bcs it's regular var not state
        resetForm();
    }
    return {
        handleCancelEditNote
    }
}

export default useCancelEditNote;