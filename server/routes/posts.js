// routes/posts.js
const express = require('express');
const router = express.Router();
const PostsController = require('../Controllers/PostsController');

// Get all posts
router.get('/posts', PostsController.getAllPosts);

module.exports = router;
