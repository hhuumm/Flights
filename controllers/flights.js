const Flight = require('../models/flight')

module.exports={
index,
create,
new:newFlight


}


function index(req, res) {
    // Find all the movies
    Flight.find({}, function(err, flights){
      // Render index view
      console.log('flights', flights)
      res.render('flights/index', {
        Flights: flights,
        title: 'All Flights'
      })
    })
  }
  function newFlight(req, res) {
    const flight = new Flight(req.body);
    res.render('flights/new', {title: 'Add Flight',Flight: flight})
  }

  function create(req, res) {
    // remove whitespace next to commas
   
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('movies/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect(`/flights/${flight._id}`);
    });
  }