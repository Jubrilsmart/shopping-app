import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";

const store = configureStore({
  reducer: {
    list: listReducer
  }
})

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('list', JSON.stringify(state.list));
});


export default store