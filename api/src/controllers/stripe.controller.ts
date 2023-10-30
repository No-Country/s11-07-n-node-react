import { Response, Request } from 'express'
import { StripeService } from '../services/stripe.service'
import { JwtAdapter } from '../config/jwt'
import { UserDataError } from '../config/handlerErrors'

export class StripeController {
  async createCheckoutSession (req: Request, res: Response): Promise<void> {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token) {
        res.status(401).json({ error: 'You must log in' })
        return
      }

      // Validar el token JWT utilizando tu función validatedToken
      const decodedToken = await JwtAdapter.validatedToken<{ id: string }>(token)

      if (!decodedToken) {
        res.status(401).json({ error: 'Token not valid' })
        return
      }

      // Ahora puedes acceder al ID del usuario desde el token decodificado
      const userId = decodedToken.id
      const stripeService = new StripeService()

      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      const session = await stripeService.createCheckoutSession(userId, req.body.typeService)
      res.status(200).json({ message: 'Checkout Session', session })
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }

  async success (req: Request, res: Response): Promise<void> {
    res.json({ message: 'Success json' })
  }

  async webhook (req: Request, res: Response): Promise<void> {
    res.json({ message: 'Webhook json' })
  }

  async cancel (req: Request, res: Response): Promise<void> {
    res.json({ message: 'Cancel json' })
  }
}
