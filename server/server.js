const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
let todos = [
  {
    id: 1,
    title: "Learn Angular",
    description: "Learn the basics of Angular",
    completed: false,
  },
  {
    id: 2,
    title: "Build a Todo App",
    description: "Build a simple to-do app with Angular",
    completed: false,
  },
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const todo = req.body;
  todo.id = todos.length + 1;
  todos.push(todo);
  res.json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  todos[todoIndex] = req.body;
  res.json(todos[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== todoId);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Todo API listening on port 3000!");
});
