var express = require('express');
var cfg = require('_/config');
var mongo = require('_/mongo');




var app = express();

// middleware
//app.use(express.static(cfg.pubDir));
//app.use(require('./routes.js'));
// Set up JSON and URL parsing in requests
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.test = function() {
    return "test";
};

module.exports = app;
