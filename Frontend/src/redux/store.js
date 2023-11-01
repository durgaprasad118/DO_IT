import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import userSlice from "./userSlice";
import { userApiSlice } from "./api/userApi";
export const store = configureStore({
  reducer: {
    TodoList: TodoSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    userName: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});
