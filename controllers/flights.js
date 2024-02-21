const Flight = require('../models/airport');


//get one flight


//get all flights
async function allFlights(req, res) {
    const flights = await Flight.find({});
    res.render('')
}

//get something else??



module.exports = {
    // oneFlight,
    allFlights
}