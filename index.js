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

app.get('/', (req,res) => res.status(200).send('connected'))
app.get('/events', (req,res) => res.status(200).send('events will be listed here.'))

app.listen(5000, (req,res) => console.log('Listening to http://localhost:5000'))