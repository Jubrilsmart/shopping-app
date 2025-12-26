import { createSlice } from "@reduxjs/toolkit";

const storedState = localStorage.getItem('list');
const initialState = storedState ? JSON.parse(storedState) : [
    {id: 1, title: 'Peak Milk', quantity: '1 Tin', bought: false},
    {id: 2, title: 'Bull Rice', quantity: '2 Mudu', bought: true},
    {id: 3, title: 'Vegetable Oil', quantity: '2 Liter', bought: true},
    {id: 4, title: 'Beans', quantity: '1 Mudu', bought: false},
    {id: 5, title: 'Chocolate', quantity: '1 Sachet', bought: true} 
  ]

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
                    item.bought = true
                }
            })
        },
        deleteItems: (state, action) => {
            state.filter((item) => !action.payload.includes(item.id))
        },
        clearList: (state) => {
            state.length = 0
        }
}})

export const {addItem, setBoughtTrue, deleteItems, clearList } = listSlice.actions
export default listSlice.reducer