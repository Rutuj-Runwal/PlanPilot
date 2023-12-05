import express, { Request, Response } from "express";
import { User, Todo } from "./db";
require("dotenv").config();
const PORT = process.env.PORT;

var app = express();

// Use json middleware
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("PlanPilot!");
});

app.post("/signup", async (req: Request, res: Response) => {
  // Get username and password input from body
  const { username, password }: { username: String; password: String } = {
    ...req.body,
  };

  // Check if user already exists in DB
  const user = await User.findOne({ username: username });

  if (!user) {
    // Add new user to DB
    const newUser = new User({ username, password });
    await newUser
      .save()
      .then(() => {
        res.status(200).json(`User created: ${username}`);
      })
      .catch((err: Error) => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send(`User with ${username} already present`);
  }
});

app.post("/login", async (req: Request, res: Response) => {
  // Get username and password input from body
  const { username, password }: { username: String; password: String } = {
    ...req.body,
  };
  // Check if user already exists in DB
  const user = await User.findOne({ username: username, password: password });
  if (user) {
    res.status(200).send("Login Successful!!");
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server open on ${PORT}`);
});
