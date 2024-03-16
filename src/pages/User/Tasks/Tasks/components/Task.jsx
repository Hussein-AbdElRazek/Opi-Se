import moment from 'moment';

import classes from './styles/Task.module.css'
import TaskOptions from './TaskOptions';

const Task = (props) =>
{
    const { lastElementRef, ...rest } = props;
    const {  title, content, createdAt, taskStatus } = rest;
    const formattedDate = moment(createdAt).format('MMM DD, YYYY');

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

            {/*Options btn  */}
            <TaskOptions
                task={rest}
            />
        </div>
    )
}

export default Task