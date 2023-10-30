import { Router } from 'express'
import { UserRoute } from './user/user.route'
import { AuthRoutes } from './auth/auth.routes'
import { StripeRoute } from './stripe/stripe.route'
import { AddWorkRoute } from './add-work/add-work.route'
import { PortfolioRoutes } from './portfolio/portfolio.route'

export class AppRoutes {
  static get routes (): Router {
    const router = Router()

    router.use('/api/v1', UserRoute.routes)
    router.use('/api/v1', AuthRoutes.routes)
    router.use('/api/v1', StripeRoute.routes)
    router.use('/api/v1', AddWorkRoute.routes)
    router.use('/api/v1', PortfolioRoutes.routes)

    return router
  }
}
