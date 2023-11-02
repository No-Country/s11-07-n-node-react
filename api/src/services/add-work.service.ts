import { UserDataError } from '../config/handlerErrors'
import { PortfolioEntity } from '../data/entities/portfolio.entity'
import { UserModel } from '../data/models/user.model'
import { UserEntity } from '../data/entities/user.entity'

import PortfolioModel from '../data/models/portfolio.model'
import { AddWorkDto } from '../data/dtos/add-work.dto'
import AddWorkModel from '../data/models/add-work/add-work.model'
import { AddWorkEntity } from '../data/entities/add-work.entity'
import { Schema, Types } from 'mongoose'

interface NewService {
  userId: string
  roles: string[]
  data: AddWorkDto
  action: string
}

export class AddWorkService {
  async checkUser (id: string): Promise<UserEntity> {
    try {
      const user = await UserModel.findById(id)

      if (!user) {
        throw UserDataError.badRequest('User not found')
      }
      return user.toObject() as UserEntity
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw error
    }
  }

  async checkPortfolio (id: Schema.Types.ObjectId | undefined): Promise<PortfolioEntity> {
    try {
      const updatePortfolio = await PortfolioModel.findById(id)

      if (updatePortfolio === null) {
        throw UserDataError.badRequest('Portfolio not found')
      }
      return updatePortfolio
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw error
    }
  }

  async checkTypeServices (typeService: string | undefined, updatePortfolio: PortfolioEntity, action: string): Promise<string[] | undefined> {
    try {
      if (!updatePortfolio[typeService as keyof PortfolioEntity]) {
        throw UserDataError.badRequest('Invalid service type')
      }

      const serviceArray = updatePortfolio[typeService as keyof PortfolioEntity]

      if (!serviceArray) {
        throw UserDataError.badRequest('Invalid service type')
      }

      if (Array.isArray(serviceArray) && serviceArray.length >= 1 && action === 'add-service') {
        throw UserDataError.badRequest('You can only add 1 service')
      }
      if (Array.isArray(serviceArray) && serviceArray.length === 0 && action === 'delete-service') {
        throw UserDataError.badRequest('No services found')
      }

      return updatePortfolio[typeService as keyof PortfolioEntity] as string[]
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw error
    }
  }

  async addService (WORK_DATA: AddWorkDto, serviceArray: string[] | undefined, portfolio: PortfolioEntity, id: string): Promise<void> {
    try {
      const { typeService, provider, ...data } = WORK_DATA
      const newService = await AddWorkModel.create({
        typeService,
        provider: id,
        ...data
      })
      await newService.save()
      if (Array.isArray(serviceArray)) {
        serviceArray.push(newService.id)
      }

      const PortfolioEntity = new PortfolioModel(portfolio)
      await PortfolioEntity.save()
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      console.log('error:', error)
      throw error
    }
  }

  async updateService (WORK_DATA: AddWorkDto, serviceArray: string[] | undefined, portfolio: PortfolioEntity): Promise<PortfolioEntity> {
    try {
      if (Array.isArray(serviceArray)) {
        serviceArray.map(async (service) => {
          const updateService = await AddWorkModel.findByIdAndUpdate(service, WORK_DATA)
          await updateService?.save()
        })
      }

      const PortfolioEntity = new PortfolioModel(portfolio)
      await PortfolioEntity.save()
      return portfolio
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      console.log('error:', error)
      throw error
    }
  }

  async deleteService (serviceArray: string[] | undefined, portfolio: PortfolioEntity): Promise<void> {
    try {
      if (Array.isArray(serviceArray)) {
        // Eliminar el servicio (documento de servicio) de la base de datos
        await AddWorkModel.findByIdAndDelete(serviceArray[serviceArray.length - 1])

        // Eliminar el ID del servicio del array serviceArray:
        serviceArray.pop()

        // Guardar el objeto portfolio en la base de datos
        // await portfolio.save()
        const PortfolioEntity = new PortfolioModel(portfolio)
        await PortfolioEntity.save()
      }
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw error
    }
  }

  async findArrayServiceById (id: string, typeService: string): Promise<AddWorkEntity | undefined> {
    // UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')

    try {
      const user = await this.checkUser(id)

      const portfolio = await this.checkPortfolio(user.portfolio)

      const serviceArray = await this.checkTypeServices(typeService, portfolio, '')

      let searchService
      if (Array.isArray(serviceArray)) {
        searchService = await AddWorkModel.findById(serviceArray)
      }

      if (searchService === null) {
        throw UserDataError.badRequest('Service not found')
      }

      return searchService as AddWorkEntity
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw error
    }
  }

  async managerServicesUser (newService: NewService): Promise<PortfolioEntity> {
    const { userId, roles, data: WORK_DATA, action } = newService
    UserDataError.handleCommonErrors(!Types.ObjectId.isValid(userId), 'Invalid ObjectId')

    try {
      const user = await this.checkUser(userId)

      // if (!roles.includes('WORKER')) {
      //   throw UserDataError.badRequest('You are not a worker')
      // }

      const portfolio = await this.checkPortfolio(user.portfolio)

      const serviceArray = await this.checkTypeServices(WORK_DATA.typeService, portfolio, action)

      switch (action) {
        case 'add-service': {
          await this.addService(WORK_DATA, serviceArray, portfolio, userId)
          break
        }

        case 'update-service': {
          await this.updateService(WORK_DATA, serviceArray, portfolio)
          break
        }
        case 'delete-service': {
          await this.deleteService(serviceArray, portfolio)
          break
        }

        default:
          throw new Error('Invalid action')
      }
      return portfolio
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      console.log('error:', error)
      throw error
    }
  }
}
