import {Router} from 'express'
import {getUsuarios, postUsuario, updateUsuario, deleteUsuario} from '../controllers/usuario.controller.js'

const router = Router();

// Usuario

router.get('/usuario', getUsuarios);

router.post('/usuario', postUsuario);

router.patch('/usuario/:id', updateUsuario);

router.delete('/usuario/:id', deleteUsuario);

export default router;