const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Flight = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    default: "",
  },
  airport: {
    type: String,
    enum: ["DEN", "LAX", "SAN", "DFW", "AUS"],
    default: "DEN",
  },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  departs: {
    type: Date,
  },
});

module.exports = mongoose.model("Flight", Flight);
