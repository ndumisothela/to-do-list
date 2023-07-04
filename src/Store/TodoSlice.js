// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    nextId: 2,
    data: {
      1: {
        content: "Content 1",
        completed: false,
      },
    },
  },

  reducers: {
    addTodo: (state, action) => {
      const { content } = action.payload;
      const newId = state.nextId;
      state.data[newId] = { content, completed: false };
      state.nextId += 1;
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      delete state.data[id];
    },
    editTodo: (state, action) => {
      const { id, content } = action.payload;
      state.data[id].content = content;
    },
    completeTodo: (state, action) => {
      const { id } = action.payload;
      state.data[id].completed = true;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
