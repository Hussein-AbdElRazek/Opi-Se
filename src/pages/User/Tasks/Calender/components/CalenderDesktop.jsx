import { useMemo } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar'

import MonthToolbar from './MonthToolbar';
import CalenderEvent from './CalenderEvent';

const localizer = momentLocalizer(moment)

const CalenderDesktop = (props) =>
{

    const { events, onOpenDay } = props;

    const { components } = useMemo(
        () => ({
            components: {
                toolbar: MonthToolbar,
                event: CalenderEvent,
                eventWrapper: (props) =>
                {
                    return (
                        <div
                            id={props.event.taskStatus}
                        >
                            {props.children}
                        </div>)
                },
            },
        }), [])

    return (
        <Calendar
            components={components}
            events={events}
            localizer={localizer}
            views={['month']}
            onShowMore={onOpenDay}
            onSelectEvent={onOpenDay}
            onSelectSlot={onOpenDay}
            selectable
            messages={{ showMore: (total) => `More +${total}` }}
        />
    )
}

export default CalenderDesktop