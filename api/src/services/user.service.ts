import { Types } from 'mongoose'
import { UserDataError } from '../config/handlerErrors'
import { UserEntity } from '../data/entities/user.entity'
import { UserModel } from '../data/models/user.model'
import { UpdateUserDto } from '../data/dtos/update-user.dto'
import AddWorkModel from '../data/models/add-work/add-work.model'
import PortfolioModel from '../data/models/portfolio.model'

export class UserService {
  async findAllUsers (): Promise<UserEntity[]> {
    try {
      const users = await UserModel.find()
        .populate({
          path: 'portfolio',
          model: PortfolioModel,
          populate: [
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
          ]
        })
        .exec()
      return users.map(user => user.toObject()) as UserEntity[]
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async findUserByEmail (email: string): Promise<boolean> {
    try {
      const user = await UserModel.findOne({ email })
      if (user === null) {
        return true
      }
      throw UserDataError.badRequest('Email already exists')
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async findUserById (id: string): Promise<UserEntity> {
    UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')
    try {
      const user = await UserModel.findById(id)
        .populate({
          path: 'portfolio',
          model: PortfolioModel,
          populate: [
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
          ]
        })
        .exec()

      if (user === null) {
        throw UserDataError.badRequest('User not found')
      }

      return user.toObject() as UserEntity
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async updateUser (id: string, DATA_USER: UpdateUserDto): Promise<UserEntity> {
    UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')

    try {
      const user = await UserModel.findByIdAndUpdate(id, DATA_USER, { new: true }).exec()

      if (user === null) {
        throw UserDataError.badRequest('User not found')
      }

      await user.save()
      return user.toObject() as UserEntity
    } catch (error) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async deleteUser (id: string): Promise<void> {
    try {
      UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')

      const user = await UserModel.findByIdAndDelete(id).exec()

      if (user === null) {
        throw UserDataError.badRequest('User not found')
      }
    } catch (error) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }
}
