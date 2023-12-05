import express, { Request, Response } from "express";
import { User, Todo } from "./db";
require("dotenv").config();
import cors from "cors";
const PORT = process.env.PORT;
const corsOptions = {
  origin: process.env.FRONTEND_URI,
  optionsSuccessStatus: 200,
};

var app = express();

// Use json middleware
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send("PlanPilot!");
});

app.post("/signup", async (req: Request, res: Response) => {
  // Get username and password input from body
  const {
    name,
    email,
    password,
  }: { name: String; email: String; password: String } = {
    ...req.body,
  };

  // Check if user already exists in DB
  const user = await User.findOne({ email: email });

  if (!user) {
    // Add new user to DB
    const newUser = new User({ name, email, password });
    await newUser
      .save()
      .then(() => {
        res.status(200).json(`User created: ${email}`);
      })
      .catch((err: Error) => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send(`User with ${email} already present`);
  }
});

app.post("/login", async (req: Request, res: Response) => {
  // Get username and password input from body
  const { email, password }: { email: String; password: String } = {
    ...req.body,
  };
  // Check if user already exists in DB
  const user = await User.findOne({ email: email, password: password });
  if (user) {
    res.status(200).send("Login Successful!!");
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server open on ${PORT}`);
});
