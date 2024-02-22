var express = require("express");
var router = express.Router();

const flightsCtrl = require("../controllers/flights");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Flights" });
});

module.exports = router;
