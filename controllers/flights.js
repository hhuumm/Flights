const Flight = require('../models/flight')

module.exports={
index,
create,
new:newFlight,
show,
delete:deleteToDo


}

// function show(req, res){
//   //const flight = Flight.findById(req.params.id)
//   Flight.findById(req.params.id)
//       res.render('flights/show', {
//         title: 'Flight Detail',
//         flight 
        
//       })
//     }

function show(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight=> {
    res.render('flights/show', {flight,title:`Flight ${flight._id}` })
  })
  .catch(err => {
    console.log(err)
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
      console.log(err)
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect(`/flights/${flight._id}`);
    });
  }

  function deleteToDo(req,res){
    console.log(req.params._id)
    Flight.deleteOne(req.params._id)
    res.redirect('/flights')
  }

  function createReview(req, res) {
    // Find the movie by id
    Movie.findById(req.params.id, function(err, movie) {
      // Add the review (from req.body)
      // and save the movie
      movie.reviews.push(req.body)
      movie.save(function(err) {
        // Redirect to show view
        res.redirect(`/movies/${movie._id}`)
      })
    })
  }