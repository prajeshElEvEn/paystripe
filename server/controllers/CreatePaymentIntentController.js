import asyncHandler from 'express-async-handler'
import Stripe from 'stripe'

const stripe = Stripe(
    process.env.STRIPE_SECRET_KEY,
    {
        apiVersion: '2022-11-15',
    }
)

// @desc    Create a new payment intent
// @route   POST /create-payment-intent
// @access  Public
const createPayment = asyncHandler(async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1099,
            currency: 'usd',
            payment_method_types: ['card'],
        })

        const clientSecret = paymentIntent.client_secret

        res.status(200).json({
            clientSecret: clientSecret
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: error.message
        })
    }
})

export { createPayment }
