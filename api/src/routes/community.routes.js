import {Router} from 'express'
import {getCommunities, getCommunity, postCommunity, updateCommunity, deleteCommunity} from '../controllers/community.controller.js'

const router = Router();

// Usuario

router.get('/community', getCommunities);

router.get('/community/:id', getCommunity);

router.post('/community', postCommunity);

router.patch('/community/:id', updateCommunity);

router.delete('/community/:id', deleteCommunity);

export default router;