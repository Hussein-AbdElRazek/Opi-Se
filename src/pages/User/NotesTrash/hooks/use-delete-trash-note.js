import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";
import { uiActions } from "../../../../store/ui-slice";
import { trashModulePath } from "../../../../config";

const useDeleteTrashNote = (noteId, uiId) =>
{
    // useDeleteTrashNote hook to handle call deleteNoteFromTrash API

    const {
        sendRequest: deleteTrashNote,
        isLoading: isLoadingDeleteTrashNote,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handleDeleteTrashNote = () =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                // remove trash note from store
                dispatch(notesActions.removeNote(noteId));

                // close modal of confirmation
                dispatch(uiActions.closeModal(uiId))

                // close pop menu of note
                dispatch(uiActions.closePopMenu(uiId))
            }
        };

        deleteTrashNote(
            {
                url: `${trashModulePath}/deleteNoteFromTrash?matchId=${matchId}&noteId=${noteId}`,
                method: "DELETE",
            },
            getResponse
        );
    }

    return {
        isLoadingDeleteTrashNote,
        handleDeleteTrashNote,
    }
}

export default useDeleteTrashNote;