import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
  reducerPath: "userAPi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-dp.onrender.com/auth",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {useLoginMutation,useRegisterMutation}= userApiSlice;