const Flight = require('../models/flight')
const Destination = require("../models/destination")

module.exports={
index,
create,
new:newFlight,
show,
delete:deleteToDo,
createTicket,
newDestination,
createDestination,
addDestination



}

// function show(req, res){
//   //const flight = Flight.findById(req.params.id)
//   Flight.findById(req.params.id)
//       res.render('flights/show', {
//         title: 'Flight Detail',
//         flight 
        
//       })
//     }

function addDestination(req,res){

Flight.findById(req.params.id, function(err,flight){
flight.destinations.push(req.body.destinationId)
flight.save(function(err){
  res.redirect(`/flights/${flight._id}`)

})
})

}
function createDestination(req,res){

 
  Destination.create(req.body, function(err,destination){

    res.redirect('/flights/newDestination')

  })

}
function newDestination(req,res){
  Destination.find({},function(err,destinations){
  res.render('destinations/new',{title:'Add Destination',destinations})
})
}
function show(req, res) {
  Flight.findById(req.params.flightId)
  .populate('destinations')
  .exec((err,flight)=>{
    //find all destinations where the _ID is NotIN(nin) the array flight.destinations
    Destination.find({_id:{$nin:flight.destinations}},function(err,destinations){    
    res.render('flights/show', {flight,destinations,title:`Flight ${flight._id}` })
 
  })
  })

}

function index(req, res) {
    // Find all the flights
    Flight.find({}, function(err, flights){
      // Render index view
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
    flight.save(function(err,flight) {
      // one way to handle errors
      console.log(err)
      if (err)
      {
        console.log(err,"\n^^Error");
        res.redirect("/flights/new")
      }
      else{
           // for now, redirect right back to new.ejs
      res.redirect(`/flights/${flight._id}`);
      }
      
     
      
      
      
    });
  }

  function createTicket(req, res){
   console.log(req.body)
   console.log("^^Req.body")
    Flight.findById(req.params.flightId, function (err,flight){
   
     flight.tickets.push(req.body)
     console.log(flight.tickets)
     flight.save(function(err,flight){
       if(err){
         console.log(err)
       }
      res.redirect(`/flights/${flight._id}`)
     })

   })}


  function deleteToDo(req,res){
    Flight.findByIdAndDelete(req.params.id,err=>{console.log(err);

      res.redirect('/flights'
    )})}



