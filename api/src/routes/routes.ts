import { Router } from 'express'
import { UserRoute } from './user/user.route'
import { AuthRoutes } from './auth/auth.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../config/swagger'

export class AppRoutes {
  static get routes (): Router {
    const router = Router()

    router.use('/api/v1', UserRoute.routes)
    router.use('/api/v1', AuthRoutes.routes)
    // router.use('/apiv1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    return router
  }
}
