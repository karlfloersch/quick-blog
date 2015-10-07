var models = require('./models.js');

// Expose our Post model for our api to use when
// handling requests
module.exports.post = models.Post;
