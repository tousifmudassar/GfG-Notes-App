const app = require("express").Router();
const user = require("./user")

app.get("/", (req, res) => {
  res.json("Welcome to /api!");
});
app.use("/user", user);
module.exports = app;
