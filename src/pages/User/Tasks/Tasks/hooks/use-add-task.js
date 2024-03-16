import { useDispatch, useSelector } from 'react-redux';

import { tasksActions } from '../../../../../store/tasks-slice';
import useHttp from '../../../../../hooks/use-http';
import { useNavigate } from 'react-router-dom';

const useAddTask = () =>
{
    // useAddTask hook to handle call addTask API

    const {
        sendRequest: addTask,
        isLoading: isLoadingAddTask,
    } = useHttp();

    const matchId = useSelector(state => state.auth.userData.matchId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleAddTask = (values) =>
    {
        const getResponse = ({ message, data }) =>
        {
            if (message.includes("success"))
            {
                dispatch(tasksActions.addTask({ tasksType: "toDo", task: data }))

                navigate(-1 || "/tasks")
            }
        };

        addTask(
            {
                url: `addTask?matchId=${matchId}`,
                method: "POST",
                body: values,
            },
            getResponse
        );
    }

    return {
        handleAddTask,
        isLoadingAddTask
    }
}

export default useAddTask