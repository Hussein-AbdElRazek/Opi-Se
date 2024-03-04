import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { emitUpdateNote, notesActions } from "../../../../store/notes-slice";
import { compareObjects } from "../../../../helpers/compareObjects";

const useEditNote = () =>
{
    // useEditNote hook to handle call updateNote API

    const {
        sendRequest: editNote,
        isLoading: isLoadingEditNote,

    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const notes = useSelector(state => state.notes.notes);
    const dispatch = useDispatch();
    const [loadingId, setLoadingId] = useState("");

    const handleEditNote = (values) => 
    {
        const _id = values._id;
        const noteBeforeEdit = notes.find(element => element._id === _id);
        let reqBody = compareObjects(noteBeforeEdit, values)

        // update id of loading note 
        setLoadingId(_id)
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                //update note in store
                const updatedNote = {
                    ...values,
                    _id,
                    isEdit: false,
                    isLoading: false,
                    createdAt: new Date().toUTCString()
                }
                dispatch(notesActions.updateNote(updatedNote))
                
                // emit update note
                dispatch(emitUpdateNote({
                    ...values,
                    _id,
                }))
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

    // manage loading state
    useEffect(() =>
    {
        let updateLoadingState = {
            isLoading: isLoadingEditNote,
            _id: loadingId
        }
        dispatch(notesActions.updateNote(updateLoadingState))
    }, [dispatch, isLoadingEditNote, loadingId])

    return {
        handleEditNote,
    }
}

export default useEditNote;