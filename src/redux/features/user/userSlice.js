import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    // email: "",
    userTasks: [],
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {}
})