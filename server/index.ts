var express = require("express");
import { Todo } from "./db";
require("dotenv").config();
const PORT = process.env.PORT;

var app = express();

app.get("/", (req: any, res: any) => {
  res.send("PlanPilot!");
});

app.get("/todos", (req: any, res: any) => {
  Todo.find()
    .then((todos) => res.status(200).send(todos))
    .catch((err) => res.status(500).send(err));
});

app.listen(PORT, () => {
  console.log(`Server open on ${PORT}`);
});
