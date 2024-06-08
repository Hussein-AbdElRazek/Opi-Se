import { useDispatch, useSelector } from "react-redux";

import useHttp from "../../../../hooks/use-http";
import { emitAddNote, notesActions } from "../../../../store/notes-slice";
import { noteModulePath } from "../../../../config";

const useAddNote = (goBack) =>
{
    // useAddNote hook to handle call addNote API

    const {
        sendRequest: addNote,
        isLoading: isLoadingAddNote,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handleAddNote = (values) =>
    {
        const reqBody = {
            noteTitle: values.noteTitle,
            noteContent: values.noteContent,
            noteColor: values.noteColor,
        }

        const getResponse = ({ message, data }) =>
        {
            if (message.includes("success"))
            {
                // add note
                dispatch(notesActions.addNote({ ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()}))

                // emit add note
                dispatch(emitAddNote({ ...reqBody, _id: data._id, createdAt: new Date() }))

                // sort all notes
                dispatch(notesActions.sortNotes())
                goBack();
            }
        };

        addNote(
            {
                url: `${noteModulePath}/addNote?matchId=${matchId}`,
                method: "POST",
                body: reqBody,
            },
            getResponse
        );
    }


    return {
        handleAddNote,
        isLoadingAddNote,
    }
}

export default useAddNote;