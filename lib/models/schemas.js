var db = require('_/mongo');

// Make function which updates Posts and Comment's 
// `created` and `updated` fields.
var dateUpdate = function(next){
  now = new Date();
  this.updated = now;
  if ( !this.created ) {
    this.created = now;
  }
  next();
};

// Set up Post schema
var Post = new Schema({
  title:    String,
  body:    String,
  created: { type: Date },
  updated: { type: Date },
  comments: [{ type : ObjectId, ref: 'Comment' }],
  meta: {
    tags: String,
    likes: Number
  }
});
// Update the `created` and `updated` fields on save
Post.pre('save', dateUpdate);
// Export the schema for use in the main app
module.exports.Post = Post;


// Set up Comment schema
var Post = new Schema({
  parentPost: { type : ObjectId, ref: 'Post' },
  author:    String,
  body:    String,
  created: { type: Date },
  updated: { type: Date },
  childComments: [{ type : ObjectId, ref: 'Comment' }],
  meta: {
    posterIP: String
  }
});
// Update the `created` and `updated` fields on save
Comment.pre('save', dateUpdate);
// Export the schema for use in the main app
module.exports.Comment = Comment;
