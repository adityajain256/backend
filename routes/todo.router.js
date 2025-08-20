import express from "express";
import {
  handleCreateTodo,
  handleDeleteTodo,
  handleGetAllTodos,
  handleGetTodoById,
  handleUpdateTodo,
} from "../controllers/todo.controller.js";

const todorouter = express.Router();

todorouter.post("/todos", handleCreateTodo);
todorouter.get("/todos", handleGetAllTodos);

todorouter
  .route("/todos/:id")
  .get(handleGetTodoById)
  .patch(handleUpdateTodo)
  .delete(handleDeleteTodo);

export default todorouter;
