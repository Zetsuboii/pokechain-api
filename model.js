const mongoose = require("mongoose");

const model = new mongoose.Schema({
  name: {
    type: String,
  },
  move: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  toPay: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("model", model);
