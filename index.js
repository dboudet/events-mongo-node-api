const express = require('express') // import express
const cors = require('cors') // import cors
const mongoose = require('mongoose') // import mongoose

const app = express() // creating app as express function
app.use(express.json()) //use express to parse into JSON

// connect to mongoose
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser:true, useUnifiedTopology:true })
.then(() => console.log('We are connected to Mongo...'))
.catch(err => console.log('Error connecting. You probably forgot your password.', err))

// create schema from mongoose
const eventSchema = mongoose.Schema({
    eventName: String,
    eventDate: Date,
    eventLocation: String,
    eventDescription: String,
    eventCost: String,
    eventAttendees: Array
}) 

const Event = mongoose.model('Event', eventSchema) //create model from Schema

const newEvent = {
    eventName: 'Happy Hour',
    eventDate: '2021-08-13',
    eventLocation: 'Mathews Brewing',
    eventDescription: 'Drinks on Jonathan.',
    eventCost: '$20',
    eventAttendees: ['Dan','Emily','Noah','Christian','Mia']
}

function createEvent(){
    new Event(newEvent)
    .save()
    .then( () => console.log('Event was saved.'))
    .catch(err => console.error(err))
}


app.get('/events', (req,res) => res.status(200).send('events will be listed here.'))
app.get('/', (req,res) => res.status(200).send('connected'))

app.post('/create-event', (req,res) => {
    createEvent()
    res.send('Event was created.')
})

app.listen(5000, (req,res) => console.log('Listening to http://localhost:5000'))