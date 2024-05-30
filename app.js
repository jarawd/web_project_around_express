const express = require("express");
const path = require("path");
const usersRoute = require("./routes/users.js");
const cardsRoute = require("./routes/cards.js");
const app = express();
const { PORT = 3000, BASE_PATH } = process.env;
app.use(express.static(path.join(__dirname, "/")));
const { users } = require("./data/users.json");

app.use("/", cardsRoute);
app.use("/", usersRoute);

app.use("users/:id", (req, res) => {
  if (!users[req.params.id]) {
    res.status(404);
    res.send({ message: "ID de usuario no encontrado" });

    return;
  }

  res.send(users[req.params.id]);
});

app.get("", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
