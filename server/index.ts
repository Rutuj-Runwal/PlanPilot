var express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

var app = express();

app.get("/", (req: any, res: any) => {
  res.send("PlanPilot!");
});

app.listen(PORT, () => {
  console.log(`Server open on ${PORT}`);
});
