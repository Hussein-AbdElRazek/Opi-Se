import { useDispatch } from "react-redux";

import { notesActions } from "../../../../store/notes-slice";

const useMakeNoteEditable = () =>
{
    // useMakeNoteEditable hook to handle make note can edit

    const dispatch = useDispatch();

    const makeNoteEditable = (_id) => () =>
    {
        // make editable 
        const updateEditState = {
            isEdit: true,
            _id
        }
        dispatch(notesActions.updateNote(updateEditState))
    }
    return {
        makeNoteEditable,
    }
}

export default useMakeNoteEditable;