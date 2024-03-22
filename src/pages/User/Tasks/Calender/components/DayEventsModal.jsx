import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import moment from 'moment';

import { ModalCard } from '../../../../../components/ui/ModalCard'
import ToolbarActions from './ToolbarActions';
import ModalEvent from './ModalEvent';
import classes from './styles/DayEventsModal.module.css'

const DayEventsModal = () =>
{
    const navigate = useNavigate();
    const { day } = useParams();
    const onCose = () => navigate("/tasks/calender");

    // filter with day
    const tasks = useSelector(state => state.tasks.tasks.all).filter(task => moment(task.startDate).isSame(moment(day), 'day'));

    const onNext = () =>
    {
        navigate(`/tasks/calender/${moment(day).clone().add(1, 'days').toISOString()}`)
    }

    const onBack = () =>
    {
        navigate(`/tasks/calender/${moment(day).subtract(1, 'days').toISOString()}`)
    }

    return (
        <ModalCard
            open={true}
            onClose={onCose}
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