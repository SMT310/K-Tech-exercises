import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ITodo } from "../types/todoTypes";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://687076877ca4d06b34b6db29.mockapi.io/api/v1/",
  }),
  tagTypes: ["Todos"],
    endpoints: (build) => ({
        getTodos: build.query<ITodo[], void>({
            query: () => "todo",
            providesTags: ["Todos"],
        }),
        addTodo: build.mutation<ITodo, Partial<ITodo>>({
            query: (body) => ({
                url: "todo",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Todos"],
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: ({ id, ...patch }) => ({
                url: `todo/${id}`,
                method: "PUT",
                body: patch,
            }),
            invalidatesTags: ["Todos"],
        }),
        deleteTodo: build.mutation < {success: boolean; id:number}, number>({
      query: ( id ) => ({
        url: `todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;