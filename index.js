const express = require('express') // import express
const cors = require('cors') // import cors
const mongoose = require('mongoose') // import mongoose

const app = express() // creating app as express function
app.use(express.json()) //use express to parse into JSON

// connect to mongoose
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser:true, useUnifiedTopology:true })
.then( () => {
    app.listen(5000)
    console.log('Listening to http://localhost:5000')
})
.catch(err => console.log('Error connecting. You probably forgot your password.', err))

//imports the router
const eventRoutes = require('./src/routes/eventRoutes')
app.use(eventRoutes)

// const newEvent = {
//     eventName: 'Happy Hour',
//     eventDate: '2021-08-13',
//     eventLocation: 'Mathews Brewing',
//     eventDescription: 'Drinks on Jonathan.',
//     eventCost: '$20',
//     eventAttendees: ['Dan','Emily','Noah','Christian','Mia']
// }

// function createEvent(){
//     new Event(newEvent)
//     .save()
//     .then( () => console.log('Event was saved.'))
//     .catch(err => console.error(err))
// }


// app.get('/events', (req,res) => res.status(200).send('events will be listed here.'))
// app.get('/', (req,res) => res.status(200).send('connected'))

// app.post('/create-event', (req,res) => {
//     createEvent()
//     res.send('Event was created.')
// })

