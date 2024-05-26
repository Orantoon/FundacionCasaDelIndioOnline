import {Router} from 'express'
import {getComment, postComment, deleteComment} from '../controllers/comment.controller.js'

const router = Router();

// Usuario

router.get('/comment/:post', getComment);

router.post('/comment', postComment);

router.delete('/comment/:id', deleteComment);

export default router;