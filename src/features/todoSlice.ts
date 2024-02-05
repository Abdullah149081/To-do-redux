import { RootState } from "@/Redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TodoItem {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface TodoState {
  todoList: TodoItem[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todoList.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const selectCount = (state: RootState) => state.todos.todoList;

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
