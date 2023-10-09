import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice'
import userSlice from './userSlice'
export const store = configureStore({
  reducer: {
    TodoList: TodoSlice,
    userName: userSlice,
  },
})
