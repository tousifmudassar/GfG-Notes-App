const app = require("express").Router();

app.get("/", (req, res) => {
  res.json("Welcome to /api/user!");
});
app.get("/");
module.exports = app;
