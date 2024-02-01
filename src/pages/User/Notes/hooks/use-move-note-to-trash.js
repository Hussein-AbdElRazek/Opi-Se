import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";

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
        // remove note from store
        dispatch(notesActions.removeNote(noteId))

        moveNoteToTrash(
            {
                url: `deleteNote?matchId=${matchId}&noteId=${noteId}`,
                method: "DELETE",
            },
            () => { }
        );
    }

    return {
        handleMoveNoteToTrash
    }
}

export default useMoveNoteToTrash;