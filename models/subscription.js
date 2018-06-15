const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
//create schema for a quote
var subscriptionSchema = mongoose.Schema({
    email: String

});



//create a model from the schema
var Subscription = mongoose.model('Subscription', subscriptionSchema);


module.exports = Subscription;
