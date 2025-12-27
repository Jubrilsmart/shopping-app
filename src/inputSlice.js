import { createSlice } from "@reduxjs/toolkit";

const initialState = {toggled: false}
export const inputSlice = createSlice({
    name: 'inputToggle',
    initialState,
    reducers: {
        setInputState: (state, action) => {
            state.toggled = action.payload
        }
    }
})

export const { setInputState } = inputSlice.actions
export default inputSlice.reducer