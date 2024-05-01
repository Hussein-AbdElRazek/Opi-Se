import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import moment from 'moment';

import { ModalCard } from '../../../../../components/ui/ModalCard'
import ToolbarActions from './ToolbarActions';
import ModalEvent from './ModalEvent';
import classes from './styles/DayEventsModal.module.css'
import useUpdateDateParams from '../hooks/use-update-date-params';

const DayEventsModal = () =>
{
    const navigate = useNavigate();
    const { day } = useParams();
    const [searchParams] = useSearchParams();
    const onClose = () => navigate(`/tasks/calender?${searchParams}`);

    // filter with day
    const tasks = useSelector(state => state.tasks.tasks.all).filter(task => moment(task.startDate).isSame(moment(day), 'day'));
    const{updateParams}=useUpdateDateParams();
    const onNext = () =>
    {
        const newDate = moment(day).add(1, 'days').toISOString();
        navigate(`/tasks/calender/${newDate}?${searchParams}`)
        updateParams(new Date(newDate))
    }

    const onBack = () =>
    {
        const newDate = moment(day).subtract(1, 'days').toISOString()

        updateParams(new Date(newDate))

        navigate(`/tasks/calender/${moment(day).subtract(1, 'days').toISOString()}?${searchParams}`)
    }

    // const onNext = () =>
    // {
    //     const newDate = moment(day).add(1, 'days');
    //     console.log('newDate', newDate)
    //     console.log('new newDate', new Date(newDate))
    //     navigate(`/tasks/calender/${new Date(newDate).toISOString()}?${searchParams}`)
    //     updateParams(new Date(newDate))
    // }

    // const onBack = () =>
    // {
    //     const newDate = moment(day).subtract(1, 'days');
    //     navigate(`/tasks/calender/${new Date(newDate).toISOString()}?${searchParams}`)
    //     updateParams(new Date(newDate))
    //     console.log('newDate', newDate)
    //     console.log('new newDate', new Date(newDate))
    // }
    return (
        <ModalCard
            open={true}
            onClose={onClose}
        >
            <div
                className={classes.toolbar}
            >
                <ToolbarActions
                    onBack={onBack}
                    backTitle='Previous day'
                    onNext={onNext}
                    nextTitle='Next day'
                    currentDate={moment(day).format("DD/MM/YYYY, dddd")}
                />
            </div>

            {tasks.map(task => (<ModalEvent key={task._id} {...task} />))}

            {/* no tasks section */}
            {!tasks.length && (
                <p
                    className={classes.empty}
                >
                    In today's task list, you haven't assigned any
                    tasks yet
                </p>
            )}

        </ModalCard>
    )
}

export default DayEventsModal