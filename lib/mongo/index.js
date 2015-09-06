// This file sets up our mongo connection using Mongoose: http://mongoosejs.com/

var log = require('_/log');
var mongoose = require('mongoose');

// Get the linked Mongo DB url and remove the "tcp" identifier.
// ex.  tcp://172.17.0.37:27017 -> ://172.17.0.37:27017
var mongoURL = process.env.RUNDOCK_MONGO_PORT.substring(3);
// Connect to mongoDB
log.info({'mongo_status': 'initializing'});
mongoose.connect('mongodb' + mongoURL + '/test');


var db = mongoose.connection;
// TODO: Use standard logger for this
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  log.info({'mongo_status': 'connected'});
});



module.exports = db;
