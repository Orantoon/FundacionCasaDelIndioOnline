import {Router} from 'express'
import {getEventos, postEvento, updateEvento, deleteEvento} from '../controllers/evento.controller.js'

const router = Router();

// Evento

router.get('/evento', getEventos);

router.post('/evento', postEvento);

router.patch('/evento/:id', updateEvento);

router.delete('/evento/:id', deleteEvento);

export default router;