const usersRoute = require("express").Router();
const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

usersRoute.get("/users", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(500).send({ message: "Usuarios no encontrados" });
      return;
    }

    res.send(JSON.parse(data));
  });
});

module.exports = usersRoute;
