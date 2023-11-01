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
      const decodedToken = await JwtAdapter.validatedToken<{ id: string, portfolio: string }>(token)

      if (!decodedToken) {
        res.status(401).json({ error: 'Token not valid' })
        return
      }

      const portfolioId = decodedToken.portfolio

      const portfolioService = new PortfolioService()
      const portfolio = await portfolioService.findPortfolioById(portfolioId)
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

  async getAllPortfolios (req: Request, res: Response): Promise<void> {
    try {
      const porfolios = await new PortfolioService().getAllPortfolios()
      res.status(200).json({ porfolios })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }
}
