import {Router} from 'express'
import {getDonationcampaigns, postDonationcampaign, updateDonationcampaign, deleteDonationcampaign} from '../controllers/donationcampaign.controller.js'

const router = Router();

// Usuario

router.get('/donationcampaign', getDonationcampaigns);

router.post('/donationcampaign', postDonationcampaign);

router.patch('/donationcampaign/:id', updateDonationcampaign);

router.delete('/donationcampaign/:id', deleteDonationcampaign);

export default router;