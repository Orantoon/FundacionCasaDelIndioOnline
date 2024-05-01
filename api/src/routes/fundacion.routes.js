import {Router} from 'express'
import {getFundacion, updateFundacion} from '../controllers/fundacion.controller.js'

const router = Router();

// Usuario

router.get('/fundacion/:id', getFundacion);

router.patch('/fundacion/:id', updateFundacion);

export default router;