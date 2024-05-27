import {Router} from 'express'
import {sendEmail} from '../controllers/sendEmail.controller.js'

const router = Router();

// Send Email

router.post('/sendemail', sendEmail);

export default router;