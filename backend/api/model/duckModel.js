const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
    },
  Location: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
    },
  Count: {
    type: Number,
    required: true,
    },
  Quantity: {
    type: Number,
    required: true,
  },
  Food: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model("duckInfo", userSchema);