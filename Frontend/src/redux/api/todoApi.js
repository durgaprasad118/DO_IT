import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const todoApiSlice = createApi({
  reducerPath: "todos",
  tagTypes: ["todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-dp.onrender.com/tasks/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set(`authorization`, `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    gettodos: builder.query({
      query: () => "getTasks",
      providesTags: ["todos"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "createTask",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),
    updateTodo: builder.mutation({
      query: ({id,data}) => ({
        url: `updateTask/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),
    deleteTodo:builder.mutation({
        query:({id})=>({
            url:`deleteTask/${id}`,
            method:"DELETE",
        }),
      invalidatesTags: ["todos"],
    })
  }),
});

export const { useGettodosQuery, useAddTodoMutation, useUpdateTodoMutation,useDeleteTodoMutation } =
  todoApiSlice;
