import { useDispatch, useSelector } from 'react-redux';

import { emitUpdateTask, tasksActions } from '../../../../../store/tasks-slice';
import useHttp from '../../../../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import { compareObjects } from '../../../../../helpers/compareObjects';
import { taskModulePath } from '../../../../../config';

const useEditTask = ({ isNavigate }) =>
{
    // useEditTask hook to handle call editTask API

    const {
        sendRequest: editTask,
        isLoading: isLoadingEditTask,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditTask = (values, taskInitialValues) =>
    {
        const editedData = compareObjects(taskInitialValues, values)
        console.log("editedData handleEditTask", editedData)
        console.log("values handleEditTask", values)

        const getResponse = ({ message, data }) =>
        {
            if (message.includes("success"))
            {
                dispatch(tasksActions.updateTask(values))

                // emit socket
                dispatch(emitUpdateTask(values))
                if (isNavigate) navigate(-1 || "/tasks")
            }
        };

        editTask(
            {
                url: `${taskModulePath}/editTask?matchId=${matchId}&taskId=${taskInitialValues._id}`,
                method: "PATCH",
                body: editedData,
            },
            getResponse
        );
    }

    return {
        handleEditTask,
        isLoadingEditTask
    }
}

export default useEditTask