import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { emitUpdateNote, notesActions } from "../../../../store/notes-slice";
import { compareObjects } from "../../../../helpers/compareObjects";

const useEditNote = (goBack) =>
{
    // useEditNote hook to handle call updateNote API

    const {
        sendRequest: editNote,
        isLoading: isLoadingEditNote,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const notes = useSelector(state => state.notes.notes);
    const dispatch = useDispatch();

    const handleEditNote = (values) => 
    {
        const _id = values._id;
        const noteBeforeEdit = notes.find(element => element._id === _id);
        let reqBody = compareObjects(noteBeforeEdit, values)

        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                //update note in store
                dispatch(notesActions.updateNote(values))

                // emit update note
                dispatch(emitUpdateNote({
                    ...values,
                    _id,
                }))

                goBack();
            }
        };

        editNote(
            {
                url: `updateNote?matchId=${matchId}&noteId=${_id}`,
                method: "PATCH",
                body: reqBody,
            },
            getResponse
        );
    }

    return {
        handleEditNote,
        isLoadingEditNote,
    }
}

export default useEditNote;