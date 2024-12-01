
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../data/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks); // Имитация асинхронной загрузки
        }, 1000); // Задержка в 1 секунду
    });
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default tasksSlice.reducer;
