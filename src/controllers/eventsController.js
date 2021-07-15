const Event = require('../models/eventModel') //import the model

exports.getAllEvents = (req,res) => {
    Event
    .find()
    .then(allEvents => {
        res.status(200).send(allEvents)
    })
    .catch(err => console.log(err))
}