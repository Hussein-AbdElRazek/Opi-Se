import { createSlice } from '@reduxjs/toolkit';

import { mergeToUnique } from '../helpers/mergeToUnique';
import { taskInitialValues } from '../pages/User/Tasks/Tasks/taskData/taskInputs';



const initialTasksState = {
    tasks: {
        "all": [],
        "toDo": [],
        "inProgress": [],
        "done": [],
    },
    totalPages: {
        "all": 1,
        "toDo": 1,
        "inProgress": 1,
        "done": 1,
    },
    totalLength: {
        "all": 0,
        "toDo": 0,
        "inProgress": 0,
        "done": 0,
    },
    openedTask: localStorage.getItem("openedTask") ?
        JSON.parse(localStorage.getItem("openedTask")) : taskInitialValues
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        addTask(state, action)
        {
            state.tasks[action.payload.tasksType].unshift(action.payload.task)
            state.totalLength[action.payload.tasksType] += 1;
        },
        mergeTasks(state, action)
        {
            state.tasks[action.payload.tasksType] = mergeToUnique(state.tasks[action.payload.tasksType], action.payload.tasks);
        },
        removeTask(state, action)
        {
            state.tasks[action.payload.tasksType] =
                state.tasks[action.payload.tasksType].filter(ele => ele._id !== action.payload.taskId)

            state.totalLength[action.payload.tasksType] -= 1;
        },
        updateTask(state, action)
        {
            state.tasks[action.payload.tasksType] = state.tasks[action.payload.tasksType].map(ele =>
            {
                if (ele._id === action.payload.task._id)
                {
                    return { ...ele, ...action.payload.task }
                }
                else return ele;
            })
        },
        updateTotalPages(state, action)
        {
            // to update TotalPages when receive it from server
            state.totalPages[action.payload.tasksType] = action.payload.totalPages;
        },
        updateTotalLength(state, action)
        {
            state.totalLength[[action.payload.tasksType]] = action.payload.totalLength;
        },
        updateOpenedTask(state, action)
        {
            state.openedTask = action.payload;
            localStorage.setItem("openedTask", JSON.stringify(action.payload))
        }
    },
})

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer;