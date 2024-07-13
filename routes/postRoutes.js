const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

// CRUD operations for posts
router.get('/', PostController.getAllPosts);
router.get('/:postId', PostController.getPostById);
router.post('/', PostController.createPost);
router.put('/:postId', PostController.updatePost);
router.delete('/:postId', PostController.deletePost);

module.exports = router;
