import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import TodoSlice from './TodoSlice'
export const store = configureStore({
  reducer: {
    TodoList: TodoSlice,
    userName: userSlice,
  },
})
