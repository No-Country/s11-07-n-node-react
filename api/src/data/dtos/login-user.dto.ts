import { UserDataError } from '../../config/handlerErrors'
import { Validators } from '../../config/validators'

export class LoginUserDto {
  constructor (
    public email: string,
    public password: string
  ) {}

  static login (object: Record<string, unknown>): [string?, LoginUserDto?] {
    const { email, password } = object

    if (typeof email !== 'string' || !Validators.isValidEmail.test(email)) {
      throw UserDataError.badRequest('Email is not valid')
    }

    if (typeof password !== 'string' || !Validators.isValidPassword(password)!) {
      throw UserDataError.badRequest('Password too short or not valid')
    }

    return [
      undefined,
      new LoginUserDto(email.toLowerCase(), password)
    ]
  }
}
