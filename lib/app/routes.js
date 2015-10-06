var express = require('express');
var router = express.Router();
var handlers = require('./handlers');

router.get('/', handlers.index);
router.get('/post-slugs', handlers.getPostSlugs);
router.get('/post/:slug', handlers.getPost);
router.post('/post', handlers.createPost);
router.put('/post/:slug', handlers.updatePost);
router.delete('/post/:slug', handlers.removePost);

module.exports = router;
