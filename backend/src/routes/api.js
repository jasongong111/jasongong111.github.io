const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Route to get all blog posts
router.get('/posts', blogController.getAllPosts);

// Route to get a single blog post by ID
router.get('/posts/:id', blogController.getPostById);

// Route to create a new blog post
router.post('/posts', blogController.createPost);

// Route to update a blog post by ID
router.put('/posts/:id', blogController.updatePost);

// Route to delete a blog post by ID
router.delete('/posts/:id', blogController.deletePost);

module.exports = router;