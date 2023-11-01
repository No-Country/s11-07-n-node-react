import { UserDataError } from '../config/handlerErrors'
import { PortfolioEntity } from '../data/entities/portfolio.entity'
import AddWorkModel from '../data/models/add-work/add-work.model'
import PortfolioModel from '../data/models/portfolio.model'

export class PortfolioService {
  async createPortfolio ():
  Promise<PortfolioEntity> {
    try {
      const newPortfolio = await PortfolioModel.create({
        servicePlumber: [],
        serviceElectrician: [],
        servicePainter: [],
        serviceMechanic: []
      })

      if (newPortfolio === null) {
        throw UserDataError.badRequest('Error creating portfolio')
      }

      await newPortfolio.save()
      return newPortfolio as PortfolioEntity
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async getAllPortfolios (): Promise<PortfolioEntity[]> {
    try {
      const portfolios = await PortfolioModel.find()
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

      if (portfolios === null) {
        throw UserDataError.badRequest('Portfolios not found')
      }

      return portfolios.map(portfolio => portfolio.toObject()) as PortfolioEntity[]
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async findPortfolioById (portfolioId: string): Promise<PortfolioEntity> {
    // const checkUser = new UserService()
    try {
      // const user = await checkUser.findUserById(id)
      const portfolio = await PortfolioModel.findById(portfolioId)
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
