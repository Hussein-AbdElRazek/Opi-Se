import { ButtonBase } from '@mui/material';

import classes from './styles/TasksList.module.css'
import Task from './Task';
import { ReactComponent as AddTaskIcon } from '../../../../../assets/icons/add.svg';
import { Btn } from '../../../../../components/inputs/Btn';
import { LoadingCenter } from '../../../../../components/ui/LoadingCenter';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
const TasksList = (props) =>
{
    const { tasks, type, totalTasksLength, lastElementRef, isLoading } = props;

    const getTitle = () =>
    {
        if (type === "todo")
        {
            return ('To do')
        } else if (type === "inProgress")
        {
            return ('In Progress')
        } else
        {
            return ('Done')
        }
    }

    return (
        <Grid2
            xs={4}
        >
            <div
                className={classes.container}
            >
                {/* header section && Loading spinner*/}
                <div
                    className={`
                                ${classes.header} 
                                ${type === "inProgress" ?
                            classes.inProgress : type === "done" ?
                                classes.done : ""}
                        `}
                >
                    <h5>
                        {getTitle()}
                    </h5>
                    <span
                        className={`${classes.tasksLength} center-x center-y`}
                    >
                        {totalTasksLength}
                    </span>
                    <ButtonBase
                        className={classes.addIconBtn}
                    >
                        <AddTaskIcon />
                    </ButtonBase>
                </div>

                {/* Tasks list */}
                {(!!tasks.length || isLoading) && (
                    <div className={classes.content}>
                        {
                            tasks.map((task, index) =>
                            {
                                return (
                                    <Task
                                        key={task._id}
                                        {...task}
                                        lastElementRef={(index === tasks.length - 1) ? lastElementRef : null}
                                    />
                                )
                            })}

                        {isLoading && <LoadingCenter />}
                    </div>
                )}

                {/* Add Task btn */}
                <Btn
                    className={classes.addBtn}
                    startIcon={<AddTaskIcon />}
                >
                    Add Task
                </Btn>
            </div>
        </Grid2>
    )
}

export default TasksList