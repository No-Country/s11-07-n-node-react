import { Request, Response } from 'express'
import { UserService } from '../../services/user.service'
import { UserDataError } from '../../config/handlerErrors'
import { UpdateUserDto } from '../../data/dtos/update-user.dto'

export class UserController {
  async getAllUsers (req: Request, res: Response): Promise<void> {
    try {
      const users = await new UserService().findAllUsers()
      res.status(200).json({ users })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }

  async getUserById (req: Request, res: Response): Promise<void> {
    try {
      const user = await new UserService().findUserById(req.params.id)
      res.status(200).json({ user })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async updateUser (req: Request, res: Response): Promise<void> {
    try {
      const [, USER_DATA] = UpdateUserDto.updateUser(req.body)
      const user = await new UserService().updateUser(req.params.id, USER_DATA!)
      res.status(201).json({ user })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async deleteUser (req: Request, res: Response): Promise<void> {
    try {
      await new UserService().deleteUser(req.params.id)
      res.status(200).json({ message: 'User deleted' })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }
}
