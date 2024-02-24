var express = require("express");
var router = express.Router();

const flightsCtrl = require("../controllers/flights");

//GET /flights
router.get("/", flightsCtrl.index);

//route for both new gets
router.get("/new", flightsCtrl.new);

router.get("/:id", flightsCtrl.show);

router.post("/", flightsCtrl.createFlight);

module.exports = router;
