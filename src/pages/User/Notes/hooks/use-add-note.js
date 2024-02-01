import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { notesActions } from "../../../../store/notes-slice";

const useAddNote = () =>
{
    // useAddNote hook to handle call addNote API

    const {
        sendRequest: addNote
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handleAddNote = (values) =>
    {
        const oldId = values._id;
        const reqBody = {
            noteTitle: values.noteTitle,
            noteContent: values.noteContent,
            noteColor: values.noteColor,
        }

        // make loading 
        const updateLoadingState = {
            isLoading: true,
            _id: oldId
        }
        dispatch(notesActions.updateNote(updateLoadingState))

        const getResponse = ({ message, data }) =>
        {
            if (message.includes("success"))
            {
                console.log("success")
                // stop loading 
                const updateLoadingState = {
                    isLoading: false,
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
    return {
        handleAddNote,
    }
}

export default useAddNote;