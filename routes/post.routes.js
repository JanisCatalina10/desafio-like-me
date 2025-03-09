import express from 'express';
import { getAllPosts, createPost } from '.././src/controllers/post.controller.js';
import { validatePost } from '../middlewares/post.middlewares.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', validatePost, createPost);

export default router;
