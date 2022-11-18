import express from "express";
import cors from "cors";
import { addTodo, deleteTodo, getTodos } from "./todos.js";

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

// middleware?
app.use(function (req, res, next) {
  console.log("Received " + req.method + " request");
  next();
});

// Get all todos
app.get("/todo", (req, res) => {
  const todos = getTodos();
  res.json(todos);
});

// add a todo
app.post("/todo", (req, res) => {
  const body = req.body;
  const todo = body.todo;
  addTodo(todo);
  res.send("");
});

// delete a todo
app.delete("/todo/:index", (req, res) => {
  const index = parseInt(req.params.index);
  deleteTodo(index);
  res.send("");
});

// listen to a port and start web server
app.listen(PORT, () => {
  console.log("listening on port 5000.");
});
