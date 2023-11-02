import { type Request, type Response } from 'express'
import { LoginUserDto } from '../../data/dtos/login-user.dto'
import { AuthService } from '../../services/auth.service'
import { UserDataError } from '../../config/handlerErrors'
import { RegisterUserDto } from '../../data/dtos/create-user.dto'

export class AuthController {
  async registerUser (req: Request, res: Response): Promise<void> {
    try {
      const [, USER_DATA] = RegisterUserDto.create(req.body)
      const authService = new AuthService()
      const user = await authService.register(USER_DATA!)

      res.status(201).json({ user })
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
