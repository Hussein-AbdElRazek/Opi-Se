import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listenToNoteDeleted, listenToGetNote, listenToUpdateNote, listenToPinNote, listenToNoteRestored } from '../../../../store/notes-slice';

const useNoteListeners = () =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        // notes socket listeners
        dispatch(listenToGetNote());
        dispatch(listenToUpdateNote());
        dispatch(listenToNoteDeleted());
        dispatch(listenToPinNote());
        dispatch(listenToNoteRestored());
    }, [dispatch])
}

export default useNoteListeners