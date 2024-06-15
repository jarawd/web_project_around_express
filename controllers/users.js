const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  User.find({})
    .orFail(() => {
      const error = new Error("Users not found");
      error.statusCode = 404;
      throw error;
    })
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .orFail(() => {
      const error = new Error("Invalid request");
      res.statusCode = 400;
      throw error;
    })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .orFail(() => {
      const error = new Error("Invalid request");
      error.statusCode = 400;
      throw error;
    })
    .then((newUser) => res.send({ data: newUser }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports.updateProfile = (req, res) => {
  const userId = req.user._id;
  const userData = req.body;
  User.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .orFail(() => {
      const error = new Error("It is not possible to update the Profile");
      error.statusCode = 400;
      throw error;
    })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports.updateAvatar = (req, res) => {
  const userId = req.user._id;
  const newAvatar = req.body;
  User.findByIdAndUpdate(userId, newAvatar, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .orFail(() => {
      const error = new Error("It is not possible to update the Avatar");
      error.statusCode = 400;
      throw error;
    })
    .then((avatar) => res.status(200).json(avatar))
    .catch((err) => res.status(500).json({ error: err.message }));
};
