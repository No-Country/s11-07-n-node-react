import { Types } from 'mongoose'
import { BcryptAdapter } from '../config/bcrypt'
import { UserDataError } from '../config/handlerErrors'
import { UserEntity } from '../data/entities/user.entity'
import { UserModel } from '../data/models/user.model'
import { RegisterUserDto } from '../data/dtos/create-user.dto'
import { UpdateUserDto } from '../data/dtos/update-user.dto'

export class UserService {
  async push (USER_DATA: RegisterUserDto): Promise<UserEntity | undefined> {
    const { firstName, lastName, email, password, ...data } = USER_DATA

    try {
      const newUser = await UserModel.create({
        firstName,
        lastName,
        email,
        password: BcryptAdapter.hash(USER_DATA.password),
        data
      })
      await newUser.save()
      return newUser.toObject() as UserEntity
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async findAllUsers (): Promise<UserEntity[]> {
    try {
      const users = await UserModel.find().exec()
      return users.map(user => user.toObject()) as UserEntity[]
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
      const user = await UserModel.findById(id).exec()

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
