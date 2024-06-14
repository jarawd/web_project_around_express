const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  User.find({})
    .orFail(() => {
      const error = new Error("Users not found");
      error.status(404);
      throw error;
    })
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => {
      const error = new Error("Invalid request");
      error.status(400);
      throw error;
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .orFail(() => {
      const error = new Error("Invalid request");
      error.status(400);
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
      error.status(400);
      throw error;
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => res.status(500).send({ error: err.message }));
};

module.exports.updateAvatar = (req, res) => {
  const userId = req.user._id;
  const userAvatar = req.body;
  User.findByIdAndUpdate(userId, userAvatar, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .orFail(() => {
      const error = new Error("It is not possible to update the Avatar");
      error.status(400);
      throw error;
    })
    .then((avatar) => res.status(200).send({ data: avatar }))
    .catch((err) => res.status(500).send({ error: err.message }));
};
