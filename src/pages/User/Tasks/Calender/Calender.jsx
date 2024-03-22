import React from 'react'
import CalenderUi from './CalenderUi'
import useGetAllTasks from './hooks/use-get-all-tasks'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Calender = () =>
{
    const navigate = useNavigate();
    const {
        lastElementRef,
        isLoadingGetAllTasks,
    } = useGetAllTasks();
    const allTasks = useSelector(state => state.tasks.tasks.all);
    const events = allTasks.map(({ startDate, endDate, taskStatus, title, _id }) => ({
        start: startDate,
        end: endDate,
        title,
        taskStatus,
        id: _id,
    }));

    const onOpenDay = (data) =>
    {
        const day = moment(data.start || data[0]?.start).toISOString();
        // TODO handle if not the same opened month not navigate
        navigate(`${day}`)
    }

    return (
        <CalenderUi
            events={events}
            lastElementRef={lastElementRef}
            onOpenDay={onOpenDay}
            isLoadingGetAllTasks={isLoadingGetAllTasks}
        />
    )
}

export default Calender