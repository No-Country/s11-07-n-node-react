import { Router } from 'express'
import { StripeController } from '../../controllers/stripe.controller'

export class StripeRoute {
  static get routes (): Router {
    const route = Router()
    const STRIPE_CONTROLLER = new StripeController()

    /**
     * @swagger
     * components:
     *   schemas:
     *     Stripe:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *         typeService:
     *           type: string
     *         quantity:
     *           type: number  // Cambiado a number
     *         currency:
     *           type: string
     *         unitAmount:
     *           type: number  // Cambiado a number
     *         images:
     *           type: array
     *           items:
     *             type: string
     *         description:
     *           type: string
     *       required:
     *         - typeService
     *       example:
     *         typeService: serviceElectrician
     */

    // /**
    //  * @swagger
    //  * paths:
    //  *   /create-checkout-session:
    //  *     get:
    //  *      security:
    //  *        - bearerAuth: []
    //  */

    /**
     * @swagger
     * /create-checkout-session:
     *   post:
     *     summary: Session de pago
     *     description: Crea la sesión de pago de un servicio en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Stripe'
     *     responses:
     *       '200':
     *         description: Error de sesion.
     *       '400':
     *         description: Error en los datos de entrada.
     *       '500':
     *         description: Error interno del servidor.
     */
    route.post('/create-checkout-session', STRIPE_CONTROLLER.createCheckoutSession)
    route.get('/success', STRIPE_CONTROLLER.success)
    route.get('/webhook', STRIPE_CONTROLLER.webhook)
    route.get('/cancel', STRIPE_CONTROLLER.cancel)

    return route
  }
}
