var express = require('express');
var router = express.Router();
var handlers = require('./handlers');

router.get('/', handlers.index);
router.get('/list-posts', handlers.getPostList);
router.get('/post/:slug', handlers.getPost);
router.put('/post/:slug', handlers.updatePost);
router.delete('/post/:slug', handlers.deletePost);
router.post('/post', handlers.createPost);

module.exports = router;
