import moment from 'moment';

import classes from './styles/Task.module.css'
import TaskOptions from './TaskOptions';

const Task = (props) =>
{
    const { lastElementRef, ...rest } = props;
    const { title, content, taskStatus, startDate, endDate } = rest;
    const formattedDate = moment(startDate).format('MMM DD, YYYY');
    const startTime = moment(startDate).format('h:mm A');
    const endTime = moment(endDate).format('h:mm A');

    return (
        <div
            className={classes.container}
            ref={lastElementRef}
        >
            {title &&
                <h6>
                    {title}
                </h6>
            }

            {content &&
                <p>
                    {content}
                </p>
            }
            
            <div className='space-between center-y flex-wrap'>
                {/* date */}
                <span
                    className={`
                                ${classes.date} 
                                ${taskStatus === "inProgress" ?
                            classes.inProgress : taskStatus === "done" ?
                                classes.done : ""
                        }`}
                >
                    {formattedDate}
                </span>

                {/* start time - end time */}
                <div className={classes.time}>
                    {`${startTime} - ${endTime}`}
                </div>
            </div>

            {/*Options btn  */}
            <TaskOptions
                task={rest}
            />
        </div>
    )
}

export default Task