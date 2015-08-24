var express = require('express');
var cfg = require('_/config');
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://172.17.0.7:27017/test');

var app = express();

// Set up JSON and URL parsing in requests
//var bodyParser = require('body-parser');
//app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//})); 

// middleware
//app.use(express.static(cfg.pubDir));
//app.use(require('./routes.js'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log("YESS");
});

module.exports = app;
