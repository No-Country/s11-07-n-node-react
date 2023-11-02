import { UserDataError } from '../config/handlerErrors'
import { UserModel } from '../data/models/user.model'
import { RegisterUserDto } from '../data/dtos/create-user.dto'
import { UserService } from './user.service'
import { BcryptAdapter } from '../config/bcrypt'
import { LoginUserDto } from '../data/dtos/login-user.dto'
import { JwtAdapter, Payload } from '../config/jwt'
import { envs } from '../config/envs.config'
import { PortfolioService } from './portfolio.service'

type HashFunction = (password: string) => string
type MatchPasswordFucntion = (password: string, passHash: string) => boolean

export class AuthService {
  duration = envs.JWT_EXPIRE
  constructor (
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly matchPasswordFucntion: MatchPasswordFucntion = BcryptAdapter.matchPassword

  ) {}

  async register (USER_DATA: RegisterUserDto): Promise<string> {
    const { firstName, lastName, email, password, roles, ...data } = USER_DATA

    const userService = new UserService()
    await userService.findUserByEmail(email)
    const newPortfolio = new PortfolioService()
    const createdPortfolio = await newPortfolio.createPortfolio()

    try {
      const newUser = await UserModel.create({
        firstName,
        lastName,
        email,
        roles,
        password: BcryptAdapter.hash(USER_DATA.password),
        data,
        portfolio: createdPortfolio._id
      })

      await newUser.save()

      const token = JwtAdapter.generateToken({
        id: newUser._id,
        email: newUser.email,
        roles: newUser.roles,
        portfolio: newUser.portfolio
      }, envs.JWT_EXPIRE)

      return await token as string
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async login (loginUserDto: LoginUserDto): Promise<string> {
    const { email, password } = loginUserDto
    try {
      const user = await UserModel.findOne({ email })

      if (!user) {
        throw UserDataError.unauthorized('Invalid credentials')
      }

      const isPasswordValid = this.matchPasswordFucntion(password, user.password)

      if (!isPasswordValid) {
        throw UserDataError.unauthorized('Invalid credentials')
      }

      const token = JwtAdapter.generateToken({
        id: user._id,
        email: user.email,
        roles: user.roles,
        portfolio: user.portfolio
      }, envs.JWT_EXPIRE)

      return await token as string
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async validateToken (token: string): Promise<Payload | null> {
    try {
      const decodedToken = await JwtAdapter.validatedToken<Payload>(token)

      if (decodedToken) {
        // El token es válido, y decodedToken contiene los datos decodificados
        return decodedToken
      } else {
        // El token no es válido
        throw UserDataError.unauthorized('Invalid token')
      }
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }
}
