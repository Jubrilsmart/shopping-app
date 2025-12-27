import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    opened: false
}

export const confirmSlice = createSlice({
    name: 'confirm',
    initialState,
    reducers: {
        setConfirm: (state, action) => {
            state.opened = action.payload
        }
    }
})

export const { setConfirm } = confirmSlice.actions;
export default confirmSlice.reducer