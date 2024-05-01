import React from 'react'
import TabsBar from './components/TabsBar'
import { Outlet } from 'react-router-dom'
import useTaskListeners from './Tasks/hooks/use-task-listeners'

const TasksHome = () =>
{
    useTaskListeners();
    
    return (
        <div>
            <TabsBar />

            {/* for make nested  pages in tasks */}
            <Outlet />
        </div>
    )
}

export default TasksHome