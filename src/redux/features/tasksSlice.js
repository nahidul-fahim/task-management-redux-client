import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

export const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({
                    id: 1,
                    status: 'pending',
                    ...payload
                });
            }
            else {
                const lastElement = state.tasks.at(-1); // getting the last element of the array using javascript 'at' method
                state.tasks.push({
                    id: lastElement.id + 1,
                    status: 'pending',
                    ...payload
                })
            }
        },
        // remove task slice
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((item) => item.id !== payload)
        },
        // update task
        updateTask: (state, { payload }) => {
            const target = state.tasks.find((item) => item.id === payload.id);
            console.log(target);
            target.status = payload.status;
        },
    }
});

export const { addTask, removeTask, updateTask } = tasksSlice.actions;

export default tasksSlice.reducer;