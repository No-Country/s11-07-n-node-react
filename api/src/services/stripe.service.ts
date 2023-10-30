import { Stripe } from 'stripe'
import { envs } from '../config/envs.config'
import { UserEntity } from '../data/entities/user.entity'
import { UserModel } from '../data/models/user.model'
import { UserDataError } from '../config/handlerErrors'
import { AddWorkService } from './add-work.service'

interface StripeConfig {
  apiKey: string
}

export class StripeService {
  stripeConfig: StripeConfig = {
    apiKey: envs.API_KEY_STRIPE
  }

  async checkUser (id: string): Promise<UserEntity> {
    try {
      const user = await UserModel.findById(id)

      if (!user) {
        throw UserDataError.badRequest('User not found')
      }
      return user.toObject() as UserEntity
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw error
    }
  }

  async createCheckoutSession (id: string, typeService: string): Promise< Stripe.Checkout.Session> {
    try {
      const stripe = new Stripe(this.stripeConfig.apiKey, { apiVersion: '2023-10-16' })

      const addService = new AddWorkService()
      const service = await addService.findArrayServiceById(id, typeService)

      if (service === undefined || service === null) {
        throw UserDataError.badRequest('Service not found')
      }
      const selectedService = [service]
      const payService = selectedService.map((data) => ({

        quantity: data.quantity,
        price_data: {
          product_data: {
            name: data.typeService,
            images: data.images,
            description: data.description
          },
          currency: data.currency,
          unit_amount: data.unitAmount
        }

      })
      )

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'], // Puedes especificar los métodos de pago permitidos
        line_items: [...payService],
        mode: 'payment',
        success_url: 'http://localhost:3000/api/v1/success',
        cancel_url: 'http://localhost:3000/api/v1/cancel'
      })

      return session.url as unknown as Stripe.Checkout.Session
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }

      console.log('error:', error)
      throw error
    }
  }
}
