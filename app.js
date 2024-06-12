const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const usersRoute = require("./routes/users");
const cardsRoute = require("./routes/cards");
const singleUserRoute = require("./routes/singleUserRoute");
app.use(express.static(path.join(__dirname, "/")));
const { PORT = 3000 } = process.env;

mongoose.connect("mongodb://localhost:27017/aroundb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use("/", cardsRoute);
app.use("/", usersRoute);
app.use("/", singleUserRoute);
app.get("", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
