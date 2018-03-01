// import files and packages up here
var express = require('express');
var topspots = require('../server/data.json')
var morgan = require('morgan');

// create your express server below
var app = express ();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function (req,res){
  res.send('hello');
  });


app.get('/data', function (req,res){
  res.send(topspots);
});



// finally export the express application
module.exports = app;
