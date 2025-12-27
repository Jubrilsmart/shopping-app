import { createSlice } from "@reduxjs/toolkit";

const storedState = localStorage.getItem('list');
const initialState = storedState ? JSON.parse(storedState) : [];

export const listSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addItem : (state, action) => {
            state.push(action.payload)
        },
        setBoughtTrue: (state, action) => {
            state.map((item) => {
                if (action.payload.includes(item.id)) {
                    item.bought = !item.bought
                }
            })
        },
        deleteItems: (state, action) => {
            return state.filter((item) => !action.payload.includes(item.id))
        },
        clearList: (state) => {
            state.length = 0;
        }
}})

export const {addItem, setBoughtTrue, deleteItems, clearList } = listSlice.actions
export default listSlice.reducer