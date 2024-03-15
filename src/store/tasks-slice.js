import { createSlice } from '@reduxjs/toolkit';

import { mergeToUnique } from '../helpers/mergeToUnique';



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
    }
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        addTask(state, action)
        {
            state.tasks[action.payload.tasksType].unshift(action.payload.task)
        },
        mergeTasks(state, action)
        {
            state.tasks[action.payload.tasksType] = mergeToUnique(state.tasks[action.payload.tasksType], action.payload.tasks);
        },
        removeTask(state, action)
        {
            state.tasks = state.tasks.filter(ele => ele._id !== action.payload)
        },
        updateTask(state, action)
        {
            state.tasks = state.tasks.map(ele =>
            {
                if (ele._id === action.payload._id)
                {
                    return { ...ele, ...action.payload }
                }
                else return ele;
            })
        },
        updateTaskId(state, action)
        {
            // to update id when receive it from server 
            state.tasks = state.tasks.map(ele =>
            {
                if (ele._id === action.payload.oldId)
                {
                    return { ...ele, _id: action.payload._id }
                }
                else return ele;
            })
        },
        updateTotalPages(state, action)
        {
            // to update TotalPages when receive it from server
            state.totalPages[action.payload.tasksType] = action.payload.totalPages;
        },
    }
})

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer;