import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    example: ""
}

export const mainReducer = createSlice({
    name: 'main',
    initialState,
    reducers: {}
})

export const {} = mainReducer.actions

export default mainReducer.reducer