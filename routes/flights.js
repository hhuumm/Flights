const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')



router.get('/',flightsCtrl.index)
router.get('/newDestination',flightsCtrl.newDestination)
router.get('/new', flightsCtrl.new)
router.get('/:flightId', flightsCtrl.show)
router.post('/destinations',flightsCtrl.createDestination)
router.post('/', flightsCtrl.create)
router.post('/:id/destinations',flightsCtrl.addDestination)
router.post('/:flightId',flightsCtrl.createTicket)
router.delete('/:id', flightsCtrl.delete)



module.exports=router;
