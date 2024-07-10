const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    petId: {
      type: String,
      required: true,
    },
    petName: {
      type: String,
      required: true,
    },
    adoptionConfirm: {
      type: Boolean,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("users", userSchema);
