import moment from 'moment';
import { IconButton } from '@mui/material';

import classes from './styles/Task.module.css'
import { ReactComponent as OptionsIcon } from '../../../../../assets/icons/options.svg';

const Task = (props) =>
{
    const { title, content, createdAt, taskStatus, lastElementRef } = props;

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
            <IconButton
                className={classes.optionsBtn}
            >
                <OptionsIcon />
            </IconButton>
        </div>
    )
}

export default Task