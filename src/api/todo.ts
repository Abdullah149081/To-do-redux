import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({ url: "tasks", method: "GET" }),
      providesTags: ["todo"],
    }),
    postTodo: builder.mutation({
      query: (data) => ({
        url: "task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    removeTodo: builder.mutation({
      query: (id) => ({
        url: `task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: `task/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
