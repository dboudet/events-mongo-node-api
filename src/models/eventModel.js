const mongoose = require('mongoose') // import mongoose

// create schemas from mongoose
const EventSchema = mongoose.Schema({
    eventName: String,
    eventDate: Date,
    eventLocation: String,
    eventDescription: String,
    eventCost: String,
    eventAttendees: Array
}) 

//create models from Schema
module.exports = mongoose.model('Event', EventSchema) 
