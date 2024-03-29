import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

export const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {}
});

export default tasksSlice.reducer;