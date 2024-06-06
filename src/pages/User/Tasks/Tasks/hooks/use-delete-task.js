import useHttp from '../../../../../hooks/use-http';
import { useDispatch, useSelector } from 'react-redux';
import { emitDeleteTask, tasksActions } from '../../../../../store/tasks-slice';
import { uiActions } from '../../../../../store/ui-slice';
import { taskModulePath } from '../../../../../config';

const useDeleteTask = (taskStatus, taskId) =>
{
    // useDeleteTask hook to handle call deleteTask API

    const {
        sendRequest: deleteTask,
        isLoading: isLoadingDeleteTask,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const handleDeleteTask = () =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                const taskData = { taskStatus: taskStatus, _id: taskId }
                // remove task from store
                dispatch(tasksActions.removeTask(taskData));

                // close modal of confirmation
                dispatch(uiActions.closeModal(taskId))

                // close pop menu of task options
                dispatch(uiActions.closePopMenu(taskId))

                // emit socket
                dispatch(emitDeleteTask(taskData))
            }
        };

        deleteTask(
            {
                url: `${taskModulePath}/deleteTask?matchId=${matchId}&taskId=${taskId}`,
                method: "DELETE",
            },
            getResponse
        );
    }

    return {
        isLoadingDeleteTask,
        handleDeleteTask,
    }
}

export default useDeleteTask