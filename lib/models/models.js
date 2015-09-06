var mongoose = require('_/mongo');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

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
  title:    { type: String, unique: true, sparse: true },
  body:    String,
  published:    {type: Boolean, default: false},
  created: { type: Date },
  updated: { type: Date },
  comments: [{ type : ObjectId, ref: 'Comment' }],
  meta: {
    tags: String,
    likes: {type: Number, default: 0}
  }
});
// Update the `created` and `updated` fields on save
Post.pre('save', dateUpdate);


// Set up Comment schema
var Comment = new Schema({
  parentPost: { type : ObjectId, ref: 'Post' },
  author:    String,
  body:    String,
  created: { type: Date },
  updated: { type: Date },
  childComments: [{ type : ObjectId, ref: 'Comment' }],
  meta: {
    authorIP: String
  }
});
// Update the `created` and `updated` fields on save
Comment.pre('save', dateUpdate);


// # Model Exports:
// Export the model for use in the main app
module.exports.Post = mongoose.model('Post', Post);

// Export the model for use in the main app
module.exports.Comment = mongoose.model('Comment', Comment);
