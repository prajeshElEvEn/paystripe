import express from 'express'
import { createPaymentIntent } from '../controllers/CreatePaymentIntentController'

const router = express.Router()

router.post('/', createPaymentIntent)
