import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    // email: "",
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {}
})