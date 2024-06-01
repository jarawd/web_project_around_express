const singleUserRoute = require("express").Router();
const fs = require("fs");
const path = require("path");

const userPath = path.join(__dirname, "../data/users.json");

singleUserRoute.get("/users/:id", (req, res) => {
  fs.readFile(userPath, { encoding: "utf8" }, (err, data) => {
    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.id);

    if (!user) {
      res.send({ Error: "Usuario no encontrado" });
      return;
    }

    res.send(user);
  });
});

module.exports = singleUserRoute;
