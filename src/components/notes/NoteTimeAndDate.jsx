import moment from 'moment'

import { ReactComponent as TimeIcon } from '../../assets/icons/alarm.svg'
import classes from './styles/NoteDate.module.css'

export const NoteTimeAndDate = ({ date }) =>
{
    return (
        <div
            className='center-x center-y'
        >
            <TimeIcon className={classes.timeIcon} />
            <span
                className={classes.date}
            >
                {moment(date).format("h:mm A, dddd")}
            </span>
        </div>
    )
}
