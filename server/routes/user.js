const user = require("express").Router();

//Dummy list of users for now.
const Users = {
  Mudassar: "123",
  Praveen: "Hello123"
};

user.get("/", (req, res) => {
  res.json(req.session.User);
});

user.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!Users[username]) {
    //User not found
    req.session.destroy();
    res.status(404).json({
      Error: true,
      Success: false,
      Message: "User not found!"
    });
  } else if (Users[username] && Users[username] !== password) {
    //password is wrong
    req.session.destroy();
    res.status(403).json({
      Error: true,
      Success: false,
      Message: "Invalid username and password!"
    });
  } else {
    //password is right.
    res.json({
      Error: false,
      Success: true,
      Message: { Name: username }
    });
  }
});

module.exports = user;
