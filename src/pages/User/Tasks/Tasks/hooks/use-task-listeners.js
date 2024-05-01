import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listenToTaskDeleted, listenToGetTask, listenToUpdateTask } from '../../../../../store/tasks-slice';

const useTaskListeners = () =>
{
    const dispatch = useDispatch();

    useEffect(() =>
    {
        // tasks socket listeners
        dispatch(listenToGetTask());
        dispatch(listenToUpdateTask());
        dispatch(listenToTaskDeleted());
    }, [dispatch])
}

export default useTaskListeners