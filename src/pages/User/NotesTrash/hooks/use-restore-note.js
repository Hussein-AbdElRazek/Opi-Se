import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { emitRestoreNote, notesActions } from "../../../../store/notes-slice";
import { uiActions } from "../../../../store/ui-slice";

const useRestoreNote = (note, uiId) =>
{
    // useRestoreNote hook to handle call restoreNote API

    const {
        sendRequest: restoreNote,
        isLoading: isLoadingRestoreNote,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handleRestoreNote = () =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                // remove  note from store
                dispatch(notesActions.removeNote(note._id));
                console.log("restore.....", note)
                // emit restore note
                dispatch(emitRestoreNote({
                    noteId: note._id,
                    noteTitle: note.noteTitle,
                    noteContent: note.noteContent,
                    noteColor: "--note1",
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                }))

                // close modal of confirmation
                dispatch(uiActions.closeModal(uiId))

                // close pop menu of note
                dispatch(uiActions.closePopMenu(uiId))
            }
        };

        restoreNote(
            {
                url: `restoreNote?matchId=${matchId}&noteId=${note._id}`,
                method: "DELETE",
            },
            getResponse
        );
    }

    return {
        isLoadingRestoreNote,
        handleRestoreNote,
    }
}

export default useRestoreNote;