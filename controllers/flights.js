const Flight = require("../models/flight");

//get all flights
const index = async function (req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", {
    title: "Available Flights",
    flights,
  });
};

//get one flight
const show = async function (req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render("flights/show", {
    title: "A Single Flight",
    flight,
  });
};

const newFlight = function (req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  });
};

//create controller

const createFlight = async function (req, res) {
  try {
    const newFlight = await Flight.create(req.body);
    console.log(newFlight);
    res.redirect("/");
  } catch (err) {
    res.render("flights/new");
    console.log(err);
  }
};

const createDest = async function (req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    await flight.save();
    console.log("create Destination: ", flight);
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
};

//get something else??

module.exports = {
  index,
  show,
  new: newFlight,
  createFlight,
  createDest,
};
