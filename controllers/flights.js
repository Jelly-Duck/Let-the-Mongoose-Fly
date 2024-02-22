const Flight = require("../models/flight");

//get one flight
const oneFlight = async function (req, res) {
  const oneFlight = Flight.findOne({ id: req.params.id });
  res.render("/flights/oneFlight", {
    title: "A Single Flight",
    oneFlight,
  });
};

//create controller

const createFlight = async function (req, res) {
  const newFlight = await Flight.create(req.body);
  res.redirect("/");
};

const newFlight = async function (req, res) {
  res.render("flights/newFlight", {
    title: "Add Flight",
    errorMsg: "Oh No Brotherr",
  });
};

//get all flights
const index = async function (req, res) {
  const flights = Flight.find({});
  console.log(flights);
  res.render("flights/index", {
    title: "Available Flights",
    flights,
  });
};

//get something else??

module.exports = {
  oneFlight,
  createFlight,
  index,
  newFlight,
};
