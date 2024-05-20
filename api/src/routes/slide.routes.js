import {Router} from 'express'
import {getSlide, postSlide, deleteSlide} from '../controllers/slide.controller.js'

const router = Router();

// Usuario

router.get('/slide/:community', getSlide);

router.post('/slide', postSlide);

router.delete('/slide/:id', deleteSlide);

export default router;