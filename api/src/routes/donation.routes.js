import {Router} from 'express'
import {getDonations, postDonation, approveDonation} from '../controllers/donation.controller.js'

const router = Router();

// Usuario

router.get('/donation', getDonations);

router.post('/donation', postDonation);

router.patch('/donation/:id', approveDonation);

export default router;