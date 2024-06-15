import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { mergeToUnique } from '../helpers/mergeToUnique';
import { taskInitialValues } from '../pages/User/Tasks/Tasks/taskData/taskInputs';
import baseSocket from '../sockets/baseConnection';


// get connection 
const socket = baseSocket;

// sockets:
// add task
export const emitAddTask = createAsyncThunk(
    'tasks/emitAddTask',
    async (payload) =>
    {
        socket.emit('addTask', payload, () => { });
    }
);
// listen to get task
export const listenToGetTask = createAsyncThunk(
    "tasks/listenToGetTask",
    async (_, thunkAPI) =>
    {
        socket.on('getTask', (data) =>
        {
            //  update state
            thunkAPI.dispatch(
                tasksActions.addTask(data.data)
            );
        });
    }
)

// update
export const emitUpdateTask = createAsyncThunk(
    'tasks/emitUpdateTask',
    async (payload) =>
    {
        socket.emit('updateTask', payload, (res) => { });
    }
);
export const listenToUpdateTask = createAsyncThunk(
    "tasks/listenToUpdateTask",
    async (_, thunkAPI) =>
    {
        socket.on('getUpdatedTask', (data) =>
        {
            const updatedTask = data.data
            // case if move task from type to type
            if (updatedTask?.oldStatus)
            {
                // remove task from old type
                thunkAPI.dispatch(tasksActions.removeTask({ ...updatedTask, taskStatus: updatedTask.oldStatus }))

                //add task to new type
                thunkAPI.dispatch(tasksActions.addTask(updatedTask))
            }
            // case if edit task 
            else
            {
                //  update state
                thunkAPI.dispatch(
                    tasksActions.updateTask(data.data)
                );
            }

            console.log("getUpdatedTask", data)
        });
    }
)

// delete
export const emitDeleteTask = createAsyncThunk(
    'tasks/emitDeleteTask',
    async (payload) =>
    {
        socket.emit('deleteTask', payload, () => { });
    }
);
export const listenToTaskDeleted = createAsyncThunk(
    "tasks/listenToTaskDeleted",
    async (_, thunkAPI) =>
    {
        socket.on('taskDeleted', (data) =>
        {
            //  update state
            thunkAPI.dispatch(
                tasksActions.removeTask(data.data)
            );
        });
    }
)

// // delete all
// export const emitDeleteAllTasks = createAsyncThunk(
//     'tasks/emitDeleteAllTasks',
//     async (payload) =>
//     {
//         socket.emit('deleteAllTasks', payload, () => {  });
//     }
// );
// export const listenToAllTasksDeleted = createAsyncThunk(
//     "tasks/listenToAllTasksDeleted",
//     async (_, thunkAPI) =>
//     {
//         socket.on('allTasksDeleted', (data) =>
//         {
//             //  update state

//         });
//     }
// )


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

const isForCalender = window.location.pathname.includes("calender");

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        addTask(state, action)
        {
            state.tasks[isForCalender ? "all" : action.payload.taskStatus].unshift(action.payload)
            state.totalLength[isForCalender ? "all" : action.payload.taskStatus] += 1;
        },
        mergeTasks(state, action)
        {
            state.tasks[isForCalender ? "all" : action.payload.taskStatus] = mergeToUnique(state.tasks[isForCalender ? "all" : action.payload.taskStatus], action.payload.tasks);
        },
        setTasks(state, action)
        {
            state.tasks[isForCalender ? "all" : action.payload.taskStatus] = action.payload.tasks;
        },
        removeTask(state, action)
        {
            state.tasks[isForCalender ? "all" : action.payload.taskStatus] =
                state.tasks[isForCalender ? "all" : action.payload.taskStatus].filter(ele => ele._id !== action.payload._id)

            state.totalLength[isForCalender ? "all" : action.payload.taskStatus] -= 1;
        },
        removeAllTasksType(state, action)
        {
            state.tasks[action.payload] = []
            state.totalLength[action.payload] = 0;
        },
        updateTask(state, action)
        {
            state.tasks[isForCalender ? "all" : action.payload.taskStatus] = state.tasks[isForCalender ? "all" : action.payload.taskStatus].map(ele =>
            {
                if (ele._id === action.payload._id)
                {
                    return { ...ele, ...action.payload }
                }
                else return ele;
            })
        },
        updateTotalPages(state, action)
        {
            // to update TotalPages when receive it from server
            state.totalPages[isForCalender ? "all" : action.payload.taskStatus] = action.payload.totalPages;
        },
        updateTotalLength(state, action)
        {
            state.totalLength[isForCalender ? "all" : action.payload.taskStatus] = action.payload.totalLength;
        },
        updateOpenedTask(state, action)
        {
            state.openedTask = action.payload;
            localStorage.setItem("openedTask", JSON.stringify(action.payload))
        },
    },
})

export const tasksActions = tasksSlice.actions

export default tasksSlice.reducer;