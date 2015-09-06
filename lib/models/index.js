var db = require('_/mongo');
var schemas = require('./schemas.js');
var log = require('_/log');

// A Simple API For Manipulating Posts and Comments
// Note: All these functions take and return simple JSON objects.


// Post API
var posts = {

  getPost : function(postID){
    log.info({'model_status': 'get Post'});
  },

  /**
   * Creates a new post
   *
   * @param {post} the JSON representation of a post.
   * @param {function} a callback function to handle errors. ex: 
   *        function (err) { 
   *          if (err) return handleError(err); 
   *        // saved!
   *        }
   */
  createPost: function(post, onSave){
    log.info({'model_status': 'new Post'});
    var newPost = new schemas.Post(post);
    newPost.save(onSave);
  },

  changePost: function(post, onSave){
    log.info({'model_status': 'change Post'});
  }
};
module.exports.posts = posts;

// Comment API
var comments = {
  getComment: function(commentID){
  },
  createComment: function(comment){
  },
  changeComment: function(comment){
  }
};
module.exports.comments = comments;


// Internal functions for handling these requests
function validatePost(post){
}
function validateComment(post){
}
