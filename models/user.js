const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  about: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /(http:\/\/|https:\/\/)(www\.)*(\w+\._~:\/\?%#\[\]@!\$&'\(\)\*\+,;=)*\/*/.test(
          v
        );
      },
      message: "Formato del enlace inválido",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
