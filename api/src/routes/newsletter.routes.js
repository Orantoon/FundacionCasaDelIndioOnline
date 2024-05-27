import {Router} from 'express'
import {newsletter} from '../controllers/newsletter.controller.js'

const router = Router();

// Newsletter

router.post('/newsletter', newsletter);

export default router;