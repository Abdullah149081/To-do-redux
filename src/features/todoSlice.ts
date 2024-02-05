import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  todoList: string[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
