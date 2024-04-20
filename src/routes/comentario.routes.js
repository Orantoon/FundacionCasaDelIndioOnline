import {Router} from 'express'
import {getComentarioPublicacion, postComentario, deleteComentario} from '../controllers/comentario.controller.js'

const router = Router();

// Comentario

router.get('/comentario/:post', getComentarioPublicacion);

router.post('/comentario', postComentario);

router.delete('/comentario/:id', deleteComentario);

export default router;