var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'quick-blog'});

module.exports = log;
