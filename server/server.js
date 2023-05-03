import express from 'express'
import dotenv from 'dotenv'
import CreatePaymentIntent from './routes/CreatePaymentIntent.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use('/create-payment-intent', CreatePaymentIntent)

app.listen(port, () => {
    console.log(`Server is running on at http://localhost:${port}`)
})
