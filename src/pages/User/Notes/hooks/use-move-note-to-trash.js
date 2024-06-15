import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { emitDeleteNote, notesActions } from "../../../../store/notes-slice";
import { noteModulePath } from "../../../../config";

const useMoveNoteToTrash = () =>
{
    // useMoveNoteToTrash hook to handle call deleteNote API

    const {
        sendRequest: moveNoteToTrash,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handleMoveNoteToTrash = (noteId) => () =>
    {
        console.log("deleted note id: ", noteId)
        // remove note from store
        dispatch(notesActions.removeNote(noteId))
        const onSuccess = () =>
        {
            dispatch(emitDeleteNote(noteId))
        }
        moveNoteToTrash(
            {
                url: `${noteModulePath}/deleteNote?matchId=${matchId}&noteId=${noteId}`,
                method: "DELETE",
            },
            onSuccess
        );
    }

    return {
        handleMoveNoteToTrash
    }
}

export default useMoveNoteToTrash;