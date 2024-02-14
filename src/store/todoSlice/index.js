import { createSlice } from "@reduxjs/toolkit";
import {message} from "antd"
const todoSlice = createSlice({
  initialState: {
    list: [],
    text: "todo list",
    openModal: false
  },
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
        state.list = [action.payload, ...state.list]
        message.success("added successfully")
    },
    deleteTodo: (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload)
        message.info("deleted successfully")
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions; // methodlarni export qilish uchnun;
export default todoSlice.reducer; // slice ni o'zini export qilish uchun
