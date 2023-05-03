import express from 'express'
import { createPayment } from '../controllers/CreatePaymentIntentController.js'


const router = express.Router()

router.route('/').post(createPayment)

export default router
