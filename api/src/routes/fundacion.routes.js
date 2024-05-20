import {Router} from 'express'
import {getFundacion, updateFundacion} from '../controllers/fundacion.controller.js'

const router = Router();

// Usuario

router.get('/fundacion/:idioma', getFundacion);

router.patch('/fundacion/:id', updateFundacion);

export default router;