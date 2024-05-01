import React from 'react'
import CalenderUi from './CalenderUi'
import useGetAllTasks from './hooks/use-get-all-tasks'
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
    const [searchParams] = useSearchParams();
    const onOpenDay = (data) =>
    {
        const day = moment(data.start || data[0]?.start).toISOString();
        navigate(`${day}?${searchParams}`)
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