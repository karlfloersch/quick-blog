var express = require('express');
var cfg = require('_/config');
var mongoose = require('mongoose');




// Get the linked Mongo DB url and remove the "tcp" identifier.
// ex.  tcp://172.17.0.37:27017
var mongoURL = process.env.RUNDOCK_MONGO_PORT.substring(3);
// Connect to mongoDB
mongoose.connect('mongodb' + mongoURL + '/test');
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


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log("YESS");
});

app.test = function() {
    return "test";
};

module.exports = app;
