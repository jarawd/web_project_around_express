const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const usersRoute = require("./routes/users");
const cardsRoute = require("./routes/cards");
app.use(express.static(path.join(__dirname, "/")));
const { PORT = 3000 } = process.env;
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/aroundb");
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "666a49b319fef596db69f25c",
  };

  next();
});

app.use("/", cardsRoute);
app.use("/", usersRoute);
app.get("", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
