import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { notesActions } from "../store/notes-slice";

const useResetNotesSlice = () =>
{
    // useResetNotesSlice hook to handle reset notes slice
    // because i used it for notes page and trash page
    // so it's necessary to reset it before use it to avoid write to wrong data 

    const dispatch = useDispatch();

    // reset notes when page render first time only
    useEffect(() =>
    {
        dispatch(notesActions.resetNotes());
    }, [dispatch])
}

export default useResetNotesSlice;