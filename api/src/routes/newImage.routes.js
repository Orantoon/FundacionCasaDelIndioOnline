import {Router} from 'express'
import {newImage} from '../controllers/newImage.controller.js'

const router = Router();

// Nueva Imagen

router.post('/newimage', newImage);

export default router;