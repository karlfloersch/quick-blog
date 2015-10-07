/*
 * Quick-Blog REST API
 * 
 * These methods provde simple ways to interact with your
 * blog posts using normal CRUD methods.
 *
 */

var log = require('_/log');
var models = require('_/models');

exports.index = function (req, res) {
  res.render('index');
};

exports.getPostSlugs = function (req, res) {
  log.info({'api_action': 'get slugs', 'api_status': 'start'});
  models.post.find({}, { slug: 1 }, function(err, slugsObj){
    var slugs = [];
    for(var i = 0; i < slugsObj.length; i++){
      slugs.push(slugsObj[i].slug);
    }
    if (err) {
      log.error({'api_action': 'get slugs', 'api_status': 'failure', 'error': err});
      res.status(400).send('Internal error, see log for details');
    } else if (!slugs){ 
      log.warn({'api_action': 'get slugs', 'api_status': 'success', 'warn': 'no slugs found'});
      res.status(404).send('not found');
    } else {
      log.info({'api_action': 'get slugs', 'api_status': 'success'});
      res.status(200).send(slugs);
    }
  });
};

exports.getPost = function (req, res) {
  var slug = req.params.slug;

  if(!slug){
    log.error({'api_action': 'get', 'api_status': 'start', 'error': 'no slug provided for get'});
    res.status(400).send('no slug provided for get');
    return;
  }
  log.info({'post_slug': slug, 'api_action': 'get', 'api_status': 'start'});
  models.post.findOne({'slug': slug}, function(err, post){
    if (err) {
      log.error({'slug': slug, 'api_action': 'get', 'api_status': 'failure', 'error': err});
      res.status(400).send('Internal error, see log for details');
    } else if (!post){ 
      log.warn({'slug': slug, 'api_action': 'get', 'api_status': 'success', 'warn': 'post not found'});
      res.status(404).send('not found');
    } else {
      log.info({'slug': slug, 'api_action': 'get', 'api_status': 'success'});
      res.status(200).send(post);
    }
  });
};

exports.updatePost = function (req, res) {
  var slug = req.params.slug;
  if(!slug){
    log.error({'api_action': 'update', 'api_status': 'start', 'error': 'no slug provided for update'});
    res.status(400).send('no slug provided for update');
    return;
  }
  var update = req.body;
  if(!update){
    log.error({'api_action': 'update', 'api_status': 'start', 'error': 'no update body'});
    res.status(400).send(update);
    return;
  }

  models.post.findOneAndUpdate({'slug': slug}, update, {'new': true, upsert:false}, function(err, post) {
    if (err){
      log.error({'api_action': 'update', 'api_status': 'failure', 'post_slug': slug, 'msg': err});
      res.status(500).send('Something went wrong! Check the logs');
    } else {
      log.info({'api_action': 'update', 'api_status': 'success', 'post_slug': slug, 'msg': 'successfully deleted'});
      res.status(200).send(post);
    }
  });

};

exports.removePost = function (req, res) {
  var slug = req.params.slug;

  if(!slug){
    log.error({'api_action': 'delete', 'api_status': 'start', 'error': 'no slug provided for delete'});
    res.status(400).send('no slug provided for delete');
    return;
  }
  log.info({'post_slug': slug, 'api_action': 'delete', 
            'api_status': 'start'});

  models.post.findOneAndRemove({'slug': slug}, function(err) {
    if (err){
      log.error({'api_action': 'delete', 'api_status': 'failure', 'post_slug': slug, 'msg': err});
      res.status(500).send('Something went wrong! Check the logs');
    } else {
      log.info({'api_action': 'delete', 'api_status': 'success', 'post_slug': slug, 'msg': 'successfully deleted'});
      res.status(200).send('Post deleted');
    }
  });
};

exports.createPost = function (req, res) {
  var postJSON = req.body;
  var dataError = getDataError(postJSON);
  if(dataError){
    log.error({'api_action': 'create', 'api_status': 'start', 
      'error': dataError});
    res.status(400).send(dataError);
    return;
  }

  log.info({'post_slug': postJSON.slug, 'api_action': 'create', 
            'api_status': 'start'});

  var newPost = models.post(postJSON);
  newPost.save(function(err, post){
    if (err){ 
      log.error({'post': post, 'api_action': 'create', 'api_status': 'failure', 'error': err});
      res.status(400).send(err);
    } else {
      log.info({'post': post, 'api_action': 'create', 'api_status': 'sucess'});
      res.status(200).send('Success');
    }
  });
};

function getDataError(data) {
  if(data == null){
    return 'Request sent no data';
  }
  // All posts and requests must have a slug
  if(!data.slug)
    return 'Request data must include the post slug';
}
