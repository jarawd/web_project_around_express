const cardsRoute = require("express").Router();
const { cards } = require("../data/cards.json");

cardsRoute.get("/cards", (req, res) => {
  res.send(cards);
});

module.exports = cardsRoute;
