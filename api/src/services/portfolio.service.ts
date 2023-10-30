import { UserDataError } from '../config/handlerErrors'
import { PortfolioDto } from '../data/dtos/portfolio.dto'
import { PortfolioEntity } from '../data/entities/portfolio.entity'
import AddWorkModel from '../data/models/add-work/add-work.model'
import PortfolioModel from '../data/models/portfolio.model'
// import { AddWorkModel } from '../data/models/add-work/add-work.model'
// import { PortfolioModel } from '../data/models/portfolio.model'

import { UserService } from './user.service'

export class PortfolioService {
  private readonly portfolioDto: PortfolioDto

  constructor () {
    this.portfolioDto = new PortfolioModel()
  }

  async createPortfolio ():
  Promise<PortfolioEntity> {
    const { ...data } = this.portfolioDto
    try {
      const newPortfolio = await PortfolioModel.create({ data })
      if (newPortfolio === null) {
        throw UserDataError.badRequest('Error creating portfolio')
      }

      // await newPortfolio.save()
      return newPortfolio
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async findPortfolioById (id: string): Promise<PortfolioEntity> {
    const checkUser = new UserService()
    try {
      const user = await checkUser.findUserById(id)
      const portfolio = await PortfolioModel.findById(user.portfolio)
        .populate([
          {
            path: 'servicePlumber',
            model: AddWorkModel
          },
          {
            path: 'serviceElectrician',
            model: AddWorkModel
          },
          {
            path: 'servicePainter',
            model: AddWorkModel
          },
          {
            path: 'serviceMechanic',
            model: AddWorkModel
          }
        ])
        .exec()

      if (portfolio === null) {
        throw UserDataError.badRequest('Portfolio not found')
      }

      return portfolio.toObject() as PortfolioEntity
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }
}
