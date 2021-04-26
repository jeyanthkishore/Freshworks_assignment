const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
    },
  count: {
    type: Number,
    required: true,
    },
  quantity: {
    type: Number,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("duckInfo", userSchema);