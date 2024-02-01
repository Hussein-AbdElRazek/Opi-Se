import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";

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
        const updateLoadingState = {
            _id: noteId,
            pinnedAt: new Date().toISOString(),
            ...reqBody
        }
        dispatch(notesActions.updateNote(updateLoadingState))

        // sort all notes
        dispatch(notesActions.sortNotes())

        pinNote(
            {
                url: `pinNote?matchId=${matchId}&noteId=${noteId}`,
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