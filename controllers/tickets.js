const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

const createTicket = async function (req, res) {
  try {
    const flight = await Flight.findById(req.params.flight_id);
    const ticket = await Ticket.create({ ...req.body, flight: flight._id });

    console.log("New ticket: ", ticket);
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createTicket,
};
