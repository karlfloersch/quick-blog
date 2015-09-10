var express = require('express');
var router = express.Router();
var handlers = require('./handlers');

router.get('/', handlers.index);
//router.get('/list-posts', ctrl.getRecentPosts);
//router.get('/post/:slug', ctrl.getPostByTitle);
//router.post('/create-post', ctrl.createPost);
//router.put('/update-post/:slug', ctrl.updatePost);
//router.del('/delete-post/:slug', ctrl.deletePost);

module.exports = router;
