var express = require("express");
var router = express.Router();

const ticketsCtrl = require("../controllers/tickets");

router.post("/:flight_id", ticketsCtrl.createTicket);

module.exports = router;
