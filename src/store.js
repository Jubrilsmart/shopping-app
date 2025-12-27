import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import inputToggleReducer from "./inputSlice";
import confirmReducer from './confirmSlice'

const store = configureStore({
  reducer: {
    list: listReducer,
    inputToggle: inputToggleReducer,
    confirm: confirmReducer
  }
})

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('list', JSON.stringify(state.list));
});


export default store