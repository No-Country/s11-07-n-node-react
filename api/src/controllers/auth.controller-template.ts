import { type Request, type Response } from 'express'
import { LoginUserDto } from '../data/dtos/login-user.dto'
import { AuthService } from '../services/auth.service'
import { UserDataError } from '../config/handlerErrors'
import { UserService } from '../services/user.service'
import { RegisterUserDto } from '../data/dtos/create-user.dto'

export class AuthController {
  async create (req: Request, res: Response): Promise<void> {
    const user = new UserService()

    try {
      const [, USER_DATA] = RegisterUserDto.create(req.body)

      await user.push(USER_DATA!)

      res.status(201).json({ message: 'User created' })
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }

  async loginUser (req: Request, res: Response): Promise<void> {
    const authService = new AuthService()
    try {
      const [, loginUserDto] = LoginUserDto.login(req.body)

      const token = await authService.login(loginUserDto!)

      res.status(201).json({ token })
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }
}
