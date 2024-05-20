import {Router} from 'express'
import {getVisitlogs, getVisitlog, postVisitlog, updateVisitlog, deleteVisitlog} from '../controllers/visitlog.controller.js'

const router = Router();

// Usuario

router.get('/visitlog', getVisitlogs);

router.get('/visitlog/:id', getVisitlog);

router.post('/visitlog', postVisitlog);

router.patch('/visitlog/:id', updateVisitlog);

router.delete('/visitlog/:id', deleteVisitlog);

export default router;