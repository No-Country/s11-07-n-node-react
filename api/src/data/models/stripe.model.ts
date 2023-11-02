import mongoose from 'mongoose'
import { StripeEntity } from '../entities/stripe.entity'

const StripeSchema = new mongoose.Schema<StripeEntity>({

  name: {
    type: String,
    default: ''
  },

  typeService: {
    type: String
  },
  quantity: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: 'usd'
  },
  unitAmount: {
    type: Number,
    default: 0
  },
  images: {
    type: [String],
    default: []
  },
  description: {
    type: String,
    default: ''
  }

})

const StripeModel = mongoose.model<StripeEntity>('Stripe', StripeSchema)
export default StripeModel
