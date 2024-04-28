import useHttp from '../../../../../hooks/use-http';
import { useDispatch, useSelector } from 'react-redux';
import { tasksActions } from '../../../../../store/tasks-slice';
import { uiActions } from '../../../../../store/ui-slice';
import { taskModulePath } from '../../../../../config';

const useDeleteTask = (tasksType, taskId) =>
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
                console.log("success taskId", taskId)

                // remove task from store
                dispatch(tasksActions.removeTask({ tasksType: tasksType, taskId: taskId }));

                // close modal of confirmation
                dispatch(uiActions.closeModal(taskId))

                // close pop menu of task options
                dispatch(uiActions.closePopMenu(taskId))
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