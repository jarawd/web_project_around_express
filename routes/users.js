const usersRoute = require("express").Router();
const { getUsers, getUserById, createUser } = require("../controllers/users");

usersRoute.get("/users", getUsers);
usersRoute.get("/users/:userId", getUserById);
usersRoute.post("/users", createUser);

module.exports = usersRoute;
