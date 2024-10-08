import { useDispatch, useSelector } from 'react-redux';

import { emitAddTask, tasksActions } from '../../../../../store/tasks-slice';
import useHttp from '../../../../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { taskModulePath } from '../../../../../config';

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
        // Combine endDate with time from endDate and date from startDate
        const momentStartDate = moment(values.startDate);
        const momentEndDate = moment(values.endDate);
        const finalEndDate = momentStartDate.clone().set({
            hour: momentEndDate.hour(),
            minute: momentEndDate.minute(),
            second: momentEndDate.second(),
            millisecond: momentEndDate.millisecond(),
        });
        values.endDate = finalEndDate;
        const getResponse = ({ message, data }) =>
        {
            if (message.includes("success"))
            {
                // update state
                dispatch(tasksActions.addTask( data ))
                
                // emit socket
                dispatch(emitAddTask(data ))

                navigate(-1 || "/tasks")
            }
        };

        addTask(
            {
                url: `${taskModulePath}/addTask?matchId=${matchId}`,
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