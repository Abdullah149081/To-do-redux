import { todoApi } from "@/api/todo";
import todoReducer from "@/features/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const middleware = [todoApi.middleware];

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
