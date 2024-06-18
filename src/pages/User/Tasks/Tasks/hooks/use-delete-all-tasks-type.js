import useHttp from '../../../../../hooks/use-http';
import { useDispatch, useSelector } from 'react-redux';
import { emitDeleteAllTasks, tasksActions } from '../../../../../store/tasks-slice';
import { uiActions } from '../../../../../store/ui-slice';
import { taskModulePath } from '../../../../../config';

const useDeleteAllTasksType = (type) =>
{
    // useDeleteTask hook to handle call deleteAllTasksType API

    const {
        sendRequest: deleteAllTasksType,
        isLoading: isLoadingDeleteAllTasksType,
    } = useHttp();
    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();

    const handleDeleteAllTasksType = () =>
    {
        const getResponse = ({ message }) =>
        {
            if (message.includes("success"))
            {
                // remove tasks type from store
                dispatch(tasksActions.removeAllTasksType(type));

                // close modal of confirmation
                dispatch(uiActions.closeModal(type))

                // emit socket deleteAllTasks type
                dispatch(emitDeleteAllTasks({ type, deleteAllTasks: true }))
            }
        };

        deleteAllTasksType(
            {
                url: `${taskModulePath}/deleteAllTasksType?matchId=${matchId}&type=${type}`,
                method: "DELETE",
            },
            getResponse
        );
    }

    return {
        isLoadingDeleteAllTasksType,
        handleDeleteAllTasksType,
    }
}

export default useDeleteAllTasksType