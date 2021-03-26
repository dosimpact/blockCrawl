import { combineReducers, createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    up: (state) => state + 1,
    down: (state) => state - 1,
  },
});

export const todos = createSlice({
  name: "slice",
  initialState: [],
  reducers: {
    addTodo: (state, action) => [{ ...action.payload }, ...state],
    delTodo: (state, action) => state.filter((e) => e.id !== action.payload.id),
  },
});

const reducer = combineReducers({
  counter: counter.reducer,
  todos: todos.reducer,
});

const store = createStore(reducer);

export default store;

// console.log(store.getState());
// store.dispatch(counter.actions.up());

// console.log(store.getState());
// store.dispatch(counter.actions.down());

// console.log(store.getState());
// store.dispatch(todos.actions.addTodo({ id: 1, text: "first" }));

// console.log(store.getState());
// store.dispatch(todos.actions.addTodo({ id: 2, text: "seconde" }));
// store.dispatch(todos.actions.addTodo({ id: 3, text: "third" }));
// store.dispatch(todos.actions.addTodo({ id: 4, text: "fourth" }));

// console.log(store.getState());

// store.dispatch(todos.actions.delTodo({ id: 3 }));
// console.log(store.getState());
