const Flight = require('../models/flight')

module.exports={
index,
create,
new:newFlight,
show


}

function show(req, res){
  Flight.findById(req.params.id)
      res.render('flights/show', {
        title: 'Flight Detail',
        flight 
        
      })
    }
function index(req, res) {
    // Find all the movies
    Flight.find({}, function(err, flights){
      // Render index view
      console.log('flights', flights)
      res.render('flights/index', {
        flights,
        title: 'All Flights'
      })
    })
  }
  function newFlight(req, res) {
    // const flight = new Flight(req.body);
    res.render('flights/new', {title: 'Add Flight'})
  }

  function create(req, res) {
    // remove whitespace next to commas
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect(`/flights/${flight._id}`);
    });
  }
