const usersRoute = require("express").Router();
const { users } = require("../data/users.json");

usersRoute.get("/users", (req, res) => {
  res.send(users);
});

module.exports = usersRoute;
