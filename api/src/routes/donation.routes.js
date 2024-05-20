import {Router} from 'express'
import {getDonationsUser, postDonation, approveDonation} from '../controllers/donation.controller.js'

const router = Router();

// Usuario

router.get('/donation/:user', getDonationsUser);

router.post('/donation', postDonation);

router.patch('/donation/:id', approveDonation);

export default router;