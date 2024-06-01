const express = require("express");
const path = require("path");
const app = express();
const usersRoute = require("./routes/users");
const cardsRoute = require("./routes/cards");
const singleUserRoute = require("./routes/singleUserRoute");
app.use(express.static(path.join(__dirname, "/")));

const { PORT = 3000 } = process.env;

app.use("/", cardsRoute);
app.use("/", usersRoute);
app.use("/", singleUserRoute);
app.get("", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
