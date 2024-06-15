import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { emitPinNote, notesActions } from "../../../../store/notes-slice";
import { noteModulePath } from "../../../../config";

const usePinNote = () =>
{
    // usePinNote hook to handle call pinNote API

    const {
        sendRequest: pinNote,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handlePinNote = (noteId, isPinned) => () =>
    {
        const reqBody = {
            isPinned: !isPinned
        }
        // change isPinned state in store automatic not wait to loading
        const updateNoteState = {
            _id: noteId,
            updatedAt: new Date().toISOString(),
            ...reqBody
        }
        dispatch(notesActions.updateNote(updateNoteState))

        // sort all notes
        dispatch(notesActions.sortNotes())

        // emit pin note
        dispatch(emitPinNote(updateNoteState))

        pinNote(
            {
                url: `${noteModulePath}/pinNote?matchId=${matchId}&noteId=${noteId}`,
                method: "PATCH",
                body: reqBody,
            },
            () => { }
        );
    }

    return {
        handlePinNote,
    }
}

export default usePinNote;