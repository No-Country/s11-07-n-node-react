// import { Request, Response } from 'express'

import { UserDataError } from '../config/handlerErrors'
import { PortfolioService } from '../services/portfolio.service'
import { Request, Response } from 'express'
import { JwtAdapter } from '../config/jwt'

export class PortfolioController {
  async findPortfolioById (req: Request, res: Response): Promise<void> {
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

      const portfolioService = new PortfolioService()
      const portfolio = await portfolioService.findPortfolioById(req.params.id)
      res.status(200).json({ portfolio })
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }
}
