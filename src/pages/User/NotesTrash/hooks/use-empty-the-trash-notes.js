import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";
import { uiActions } from "../../../../store/ui-slice";
import { trashModulePath } from "../../../../config";

const useEmptyTheTrashNotes = () =>
{
    // useEmptyTheTrashNotes hook to handle call flushTrash API

    const {
        sendRequest: emptyTheTrashNotes,
        isLoading: isLoadingEmptyTheTrashNotes,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handleEmptyTheTrashNotes = () =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message.includes("success"))
            {
                // reset store to remove all trash notes
                dispatch(notesActions.resetNotes());

                // close modal of confirmation
                dispatch(uiActions.closeModal())

                // close pop menu of note
                dispatch(uiActions.closePopMenu())
            }
        };

        emptyTheTrashNotes(
            {
                url: `${trashModulePath}/flushTrash?matchId=${matchId}`,
                method: "DELETE",
            },
            getResponse
        );
    }

    return {
        isLoadingEmptyTheTrashNotes,
        handleEmptyTheTrashNotes,
    }
}

export default useEmptyTheTrashNotes;