var models = require('./models.js');
var log = require('_/log');


// A Simple API For Manipulating Posts and Comments
// Note: All these functions take and return simple JSON objects.


// Post API
var posts = {

  /**
   * Find an existing post
   *
   * @param {String} postTitle: the title of the post.
   * @param {function} onFind: a callback function to handle errors. ex: 
   *        function (err) { 
   *          if (err) return handleError(err); 
   *        // found!
   *        }
   */
  find : function(postTitle, onFind){
    log.info({'post_title': postTitle, 'model_status': 'find Post'});
    schemas.Post.findOne({'title': 'postTitle'}, function(err){
      if (err) 
        log.info({'post_title': postTitle, 'model_status': 'Post not found', 'msg': 'calling callback'});
      else
        log.info({'post_title': postTitle, 'model_status': 'Post found', 'msg': 'calling callback'});
      onFind(err);
    });
  },

  /**
   * Creates a new post
   *
   * @param {JSON} post: the JSON representation of a post.
   * @param {function} onSave: a callback function to handle errors. ex: 
   *        function (err) { 
   *          if (err) return handleError(err); 
   *        // saved!
   *        }
   */
  create: function(post, onSave){
    log.info({'post_title': post.title, 'model_status': 'creating new Post'});
    var newPost = new schemas.Post(post);
    newPost.save(function(err){
      if (err) 
        log.info({'post_title': postTitle, 'model_status': 'new Post not saved', 'msg': 'calling callback'});
      else
        log.info({'post_title': postTitle, 'model_status': 'new Post saved', 'msg': 'calling callback'});
      onSave(err);
    });
  },

  update: function(post, onSave){
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
