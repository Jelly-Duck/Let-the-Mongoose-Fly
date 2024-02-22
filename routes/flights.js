var express = require("express");
var router = express.Router();

const flightsCtrl = require("../controllers/flights");

//GET /flights
router.get("/", flightsCtrl.index);

//route for both new gets
router.get("/oneFlight", flightsCtrl.oneFlight);

router.get("/newFlight", flightsCtrl.newFlight);

router.post("/newFlight", flightsCtrl.createFlight);

module.exports = router;
