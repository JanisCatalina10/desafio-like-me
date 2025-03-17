import express from 'express';
import { getAllPosts, createPost, updatePost, deletePost } from '.././src/controllers/post.controller.js';
import { updatePostMiddleware, validatePost} from '../middlewares/post.middlewares.js';

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/create_post', validatePost, createPost);
router.put('/update_post:post_id', updatePostMiddleware, updatePost);
router.delete('/delete_post:post_id', deletePost)

export default router;
