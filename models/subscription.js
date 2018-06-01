const mongoose = require('mongoose');


//create schema for a quote
var subscription = mongoose.Schema({
    email: String,

});



//create a model from the schema
var subscription = mongoose.model('subscription', subscription);


module.exports = subscription;
