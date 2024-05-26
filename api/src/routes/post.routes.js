import {Router} from 'express'
import {getPosts, getPost, postPost, updatePost, deletePost} from '../controllers/post.controller.js'

const router = Router();

// Usuario

router.get('/post', getPosts);

router.get('/post/:id', getPost);

router.post('/post', postPost);

router.patch('/post/:id', updatePost);

router.delete('/post/:id', deletePost);

export default router;