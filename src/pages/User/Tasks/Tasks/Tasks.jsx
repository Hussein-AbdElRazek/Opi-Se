import { useSelector } from 'react-redux'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Outlet } from 'react-router-dom'

import useGetSpecificTasksType from './hooks/use-get-specific-tasks-type'
import TasksList from './components/TasksList'
import classes from './styles/Tasks.module.css'
import TasksTabs, { tasksTabsMap } from './components/TasksTabs'

const RenderTodoTasks = () =>
{
    const {
        isLoadingSpecificTasksType: isLoadingGetTodoTasks,
        lastElementRef: lastTodoTaskRef,
    } = useGetSpecificTasksType("toDo");

    const todoTasks = useSelector(state => state.tasks.tasks.toDo);
    const totalTodoTasksLength = useSelector(state => state.tasks.totalLength.toDo);

    return (
        <TasksList
            type="toDo"
            tasks={todoTasks}
            totalTasksLength={totalTodoTasksLength}
            lastElementRef={lastTodoTaskRef}
            isLoading={isLoadingGetTodoTasks}
        />
    )
}

const RenderInProgressTasks = () =>
{
    const {
        isLoadingSpecificTasksType: isLoadingGetInProgressTasks,
        lastElementRef: lastInProgressTaskRef,
    } = useGetSpecificTasksType("inProgress")

    const inProgressTasks = useSelector(state => state.tasks.tasks.inProgress);
    const totalInProgressTasksLength = useSelector(state => state.tasks.totalLength.inProgress);

    return (
        <TasksList
            type="inProgress"
            tasks={inProgressTasks}
            totalTasksLength={totalInProgressTasksLength}
            lastElementRef={lastInProgressTaskRef}
            isLoading={isLoadingGetInProgressTasks}
        />
    )
}

const RenderDoneTasks = () =>
{
    const {
        isLoadingSpecificTasksType: isLoadingGetDoneTasks,
        lastElementRef: lastDoneTaskRef,
    } = useGetSpecificTasksType("done")

    const doneTasks = useSelector(state => state.tasks.tasks.done);
    const totalDoneTasksLength = useSelector(state => state.tasks.totalLength.done);

    return (
        <TasksList
            type="done"
            tasks={doneTasks}
            totalTasksLength={totalDoneTasksLength}
            lastElementRef={lastDoneTaskRef}
            isLoading={isLoadingGetDoneTasks}
        />
    )
}

const Tasks = () =>
{
    const tasksTypeMap = {
        0: <RenderTodoTasks />,
        1: <RenderInProgressTasks />,
        2: <RenderDoneTasks />,
    }

    const RenderOpenedTypeForSmallScreens = tasksTypeMap[tasksTabsMap[window.location.pathname]]

    return (
        <div
            className={classes.container}
        >
            {/* for bigger than 768px */}
            <Grid2
                container
                columnSpacing={2}
                className={classes.bigScreens}
            >
                <RenderTodoTasks />
                <RenderInProgressTasks />
                <RenderDoneTasks />
            </Grid2>

            {/* for small than 768px */}
            <div
                className={classes.smallScreens}
            >
                <TasksTabs />
                {RenderOpenedTypeForSmallScreens}
            </div>

            <Outlet />
        </div>
    )
}

export default Tasks