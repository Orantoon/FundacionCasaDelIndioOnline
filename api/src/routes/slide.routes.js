import {Router} from 'express'
import {getSlides, postSlide, deleteSlide} from '../controllers/slide.controller.js'

const router = Router();

// Usuario

router.get('/slide/', getSlides);

router.post('/slide', postSlide);

router.delete('/slide/:id', deleteSlide);

export default router;