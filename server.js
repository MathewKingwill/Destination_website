// load the things we need
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var ejs = require('ejs')
var mongoose = require('mongoose');
var router = express.Router();
var subscription = require('./models/subscription');

mongoose.connect('mongodb://matkingwill:cuan1234@ds237610.mlab.com:37610/newsletter');

var app = express();




router.post('/', function(req, res, next){

 var subscription = new subscription();

 subscription.email = req.body.email;

 subscription.save(function (err) {
     if (error) return handleError(err);


 res.redirect('/')
});
});
app.use( express.static( "public" ) );


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page
app.get('/Hawaii', function(req, res) {
	res.render('pages/Hawaii');
});
app.get('/Bali', function(req, res) {
	res.render('pages/Bali');
});
app.get('/Mauritius', function(req, res) {
	res.render('pages/Mauritius');
});


app.listen(8080);
console.log('8080 is the magic port');
