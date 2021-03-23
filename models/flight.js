const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketSchema= new Schema({
    seat:{type:String},
    price:{type:Number}
})

const flightSchema = new Schema({
    airline:{type:String,enum:['American','Southwest','United']},
    airport:{type:String,enum:['AUS','DFW','DEN','LAX','SAN'],default:"DEN"},
    flightNo:{type:Number,min: 10, max: 9999},
    departs:{type:Date, default: () => Date.now() + 7*24*60*60*1000},
    tickets:{type:[ticketSchema]}
    })

    module.exports = mongoose.model('flight', flightSchema)