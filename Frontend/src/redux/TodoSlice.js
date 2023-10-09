import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    token: localStorage.getItem('token'),
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = action.payload
    },
    add: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((x) => x._id != action.payload)
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((x) => x._id === action.payload._id)
      state.todos[index] = action.payload
    },
    clearTodos: (state, action) => {
      state.todos = []
    },
  },
})
export const { addTodo, removeTodo, updateTodo, clearTodos, add } =
  todoSlice.actions
export default todoSlice.reducer
