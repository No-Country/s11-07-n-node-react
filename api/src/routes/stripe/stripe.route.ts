import { Router } from 'express'
import { StripeController } from '../../controllers/stripe.controller'

export class StripeRoute {
  static get routes (): Router {
    const route = Router()
    const STRIPE_CONTROLLER = new StripeController()

    // route.delete('/payment', USER_CONTROLLER.deleteUser)
    route.post('/create-checkout-session', STRIPE_CONTROLLER.createCheckoutSession)
    route.get('/success', STRIPE_CONTROLLER.success)
    route.get('/webhook', STRIPE_CONTROLLER.webhook)
    route.get('/cancel', STRIPE_CONTROLLER.cancel)

    return route
  }
}
