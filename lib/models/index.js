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
    log.info({'post_title': postTitle, 'model_action': 'find', 
              'model_status': 'start'});

    models.Post.findOne({'title': postTitle}, function(err, post){
      if (err) 
        log.error({'post_title': postTitle, 'model_action': 'find', 
                  'model_status': 'failure', 'error': err, 'msg': 'calling callback'});
      else if (!post) 
        log.warn({'post_title': postTitle, 'model_action': 'find', 
                  'model_status': 'success', 'warn': 'post not found', 'msg': 'calling callback'});
      else
        log.info({'post_title': postTitle, 'model_action': 'find', 
                  'model_status': 'success', 'msg': 'calling callback'});

      onFind(err, post);
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
    log.info({'post_title': post.title, 'model_action': 'create', 
              'model_status': 'start', 'msg': 'calling callback'});

    var newPost = new models.Post(post);
    newPost.save(function(err, post){
      if (err) 
        log.error({'post_title': post.title, 'model_action': 'create', 
                   'model_status': 'failure', 'error': err, 'msg': 'calling callback'});
      else
        log.info({'post_title': post.title, 'model_action': 'create', 
                  'model_status': 'sucess', 'msg': 'calling callback'});
      onSave(err, post);
    });
  },

  update: function(postTitle, updates, onUpdate){
    models.Post.findOneAndUpdate({'title': postTitle}, updates, {'new': true, upsert:false}, function(err, post) {
      if (err) 
        log.error({'post_title': postTitle, 'model_action': 'update', 
                  'model_status': 'failure', 'error': err, 'msg': 'calling callback'});
      else
        log.info({'post_title': postTitle, 'model_action': 'update', 
                  'model_status': 'success', 'msg': 'calling callback'});
      onUpdate(err, post);
    });
  },

  remove: function(postTitle, onRemove){

    models.Post.findOneAndRemove({'title': postTitle}, function(err){
      if (err) 
        log.error({'post_title': postTitle, 'model_action': 'remove', 
                  'model_status': 'failure', 'error': err, 'msg': 'calling callback'});
      else
        log.info({'post_title': postTitle, 'model_action': 'remove', 
                  'model_status': 'success', 'msg': 'calling callback'});
      onRemove(err);
    });

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
function validatePostJSON(post){
}
function validateComment(post){
}
