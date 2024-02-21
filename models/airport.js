const mongoose = require('mongoose');
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
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: {
    type: Date,
    default: () => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    },
  },
});

module.exports = mongoose.model("Flight", Flight);
