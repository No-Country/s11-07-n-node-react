import { UserDataError } from '../config/handlerErrors'
import { UserEntity } from '../data/entities/user.entity'
import { UserModel } from '../data/models/user.model'
import { RegisterUserDto } from '../data/dtos/create-user.dto'
import { UserService } from './user.service'
import { BcryptAdapter } from '../config/bcrypt'
import { LoginUserDto } from '../data/dtos/login-user.dto'
import { JwtAdapter, Payload } from '../config/jwt'
import { envs } from '../config/envs.config'

type HashFunction = (password: string) => string
type MatchPasswordFucntion = (password: string, passHash: string) => boolean

export class AuthService {
  duration = envs.JWT_EXPIRE
  constructor (
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly matchPasswordFucntion: MatchPasswordFucntion = BcryptAdapter.matchPassword

  ) {}

  async register (USER_DATA: RegisterUserDto): Promise<UserEntity > {
    const newUser = await new UserService().push(USER_DATA)
    return newUser as UserEntity
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
        roles: [user.roles]
      }, envs.JWT_EXPIRE)

      // 4. Devolver el token
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
