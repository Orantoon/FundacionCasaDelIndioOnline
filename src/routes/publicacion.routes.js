import {Router} from 'express'
import {getPublicaciones, getPublicacion, postPublicacion, updatePublicacion, deletePublicacion} from '../controllers/publicacion.controller.js'

const router = Router();

// Publicacion

router.get('/publicacion', getPublicaciones);

router.get('/publicacion/:id', getPublicacion);

router.post('/publicacion', postPublicacion);

router.patch('/publicacion/:id', updatePublicacion);

router.delete('/publicacion/:id', deletePublicacion);

export default router;