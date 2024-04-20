import {Router} from 'express'
import {getDonacionesUsuario, postDonacion} from '../controllers/donacion.controller.js'

const router = Router();

// Donacion

router.get('/donacion/:user', getDonacionesUsuario);

router.post('/donacion', postDonacion);

export default router;