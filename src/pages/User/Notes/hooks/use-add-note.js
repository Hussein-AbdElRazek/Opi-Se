import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";

const useAddNote = () =>
{
    // useAddNote hook to handle call addNote API

    const {
        sendRequest: addNote,
        isLoading: isLoadingAddNote,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const [loadingId, setLoadingId] = useState("");

    const handleAddNote = (values) =>
    {
        const oldId = values._id;
        const reqBody = {
            noteTitle: values.noteTitle,
            noteContent: values.noteContent,
            noteColor: values.noteColor,
        }

        // update id of loading note 
        setLoadingId(oldId)
        const getResponse = ({ message, data }) =>
        {
            if (message.includes("success"))
            {
                // change isNew state
                const updateLoadingState = {
                    _id: oldId,
                    isNew: false
                }
                dispatch(notesActions.updateNote(updateLoadingState))

                //update id when receive it from server 
                const updatedId = {
                    oldId: oldId,
                    _id: data._id || oldId
                }
                dispatch(notesActions.updateNoteId(updatedId))
            }
        };

        addNote(
            {
                url: `addNote?matchId=${matchId}`,
                method: "POST",
                body: reqBody,
            },
            getResponse
        );
    }

    // manage loading state
    useEffect(() =>
    {
        let updateLoadingState = {
            isLoading: isLoadingAddNote,
            _id: loadingId
        }
        dispatch(notesActions.updateNote(updateLoadingState))
    }, [dispatch, isLoadingAddNote, loadingId])

    return {
        handleAddNote,
    }
}

export default useAddNote;