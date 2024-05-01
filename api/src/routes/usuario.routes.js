import {Router} from 'express'
import {getUsuarios, getUsuario, postUsuario, updateUsuario, deleteUsuario} from '../controllers/usuario.controller.js'

const router = Router();

// Usuario

router.get('/usuario', getUsuarios);

router.get('/usuario/:id', getUsuario);

router.post('/usuario', postUsuario);

router.patch('/usuario/:id', updateUsuario);

router.delete('/usuario/:id', deleteUsuario);

export default router;