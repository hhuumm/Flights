const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline:String,
    airport:{type:String,default:"DEN"},
    flightNo:Number,
    departs:{type:Date, default: () => Date.now() + 7*24*60*60*1000},
    })


    module.exports = mongoose.model('flight', flightSchema)