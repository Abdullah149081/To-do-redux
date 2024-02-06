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
      state.todoList.sort((a, b) => {
        return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        state.todoList.sort((a, b) => {
          if (a.isCompleted && !b.isCompleted) {
            return 1;
          } else if (!a.isCompleted && b.isCompleted) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    },
  },
});

export const selectCount = (state: RootState) => state.todos.todoList;

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
