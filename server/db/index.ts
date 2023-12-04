import mongoose, { Schema } from "mongoose";

//  Define Schemas
const userSchema = new Schema({
  username: String,
  password: String,
});

const todoSchema = new Schema({
  userId: String,
  title: String,
  description: String,
  status: Boolean,
});

// Connect to DB
if (!process.env.MONGODB_URI) {
  throw new Error("MongoDB URI not defined in env!");
}
mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;

// Generate Models
const User = mongoose.models.User || mongoose.model("User", userSchema);
const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export { User, Todo };
