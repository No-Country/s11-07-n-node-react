import { Router } from 'express'
import { UserRoute } from './user/user.route'
import { AuthRoutes } from './auth/auth.routes'

export class AppRoutes {
  static get routes (): Router {
    const router = Router()

    router.use('/api/v1', UserRoute.routes)
    router.use('/api/v1', AuthRoutes.routes)

    return router
  }
}
