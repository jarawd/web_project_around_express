const usersRoute = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

usersRoute.get("/users", getUsers);
usersRoute.get("/users/:userId", getUserById);
usersRoute.post("/users", createUser);
usersRoute.patch("/users/me", updateProfile);
usersRoute.patch("/users/me/avatar", updateAvatar);

module.exports = usersRoute;
