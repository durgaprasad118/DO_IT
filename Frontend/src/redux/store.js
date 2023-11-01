import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

import { userApiSlice } from "./api/userApi";
import { todoApiSlice } from "./api/todoApi";
import userSlice from "./api/userSlice";
export const store = configureStore({
  reducer: {
    TodoList: TodoSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [todoApiSlice.reducerPath]: todoApiSlice.reducer,
    userName: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApiSlice.middleware,
      todoApiSlice.middleware
    ),
});
