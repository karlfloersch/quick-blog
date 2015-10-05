var express = require('express');
var router = express.Router();
var handlers = require('./handlers');

router.get('/', handlers.index);
router.get('/list-posts', handlers.getPostList);
router.get('/post/:slug', handlers.getPost);
router.post('/create-post/', handlers.createPost);
router.put('/post/:slug', handlers.updatePost);
router.delete('/post/:slug', handlers.removePost);

module.exports = router;
