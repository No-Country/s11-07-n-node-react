import { Router } from 'express'
import { AuthController } from '../../controllers/auth.controller-template'

export class AuthRoutes {
  static get routes (): Router {
    const authRouter = Router()

    const controller = new AuthController()

    authRouter.post('/auth/register', controller.create)
    authRouter.post('/auth/login', controller.loginUser)

    return authRouter
  }
}
