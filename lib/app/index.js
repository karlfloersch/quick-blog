var express = require('express'),
    routes = require('./routes/index');

var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
}

// Set up JSON and URL parsing in requests
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//app.get('/get-posts', routes.getPosts);

app.listen(3000);
console.log('Listening on port 3000...');
