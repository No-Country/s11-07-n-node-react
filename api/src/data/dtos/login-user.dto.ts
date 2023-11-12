import { UserDataError } from '../../config/handlerErrors'
import { Validators } from '../../config/validators'

export class LoginUserDto {
  constructor (
    public email: string,
    public password: string
  ) {}

  static login (object: Record<string, unknown>): [string?, LoginUserDto?] {
    const { email, password } = object

    const allowedProperties = ['email', 'password']
    for (const key in object) {
      if (!allowedProperties.includes(key)) {
        throw UserDataError.badRequest(`The field ${key} is not a login user property`)
      }
    }

    if (typeof email !== 'string' || !Validators.isValidEmail.test(email)) {
      throw UserDataError.badRequest('Credentials not valid')
    }

    if (typeof password !== 'string' || !Validators.isValidPassword(password)!) {
      throw UserDataError.badRequest('Credentials not valid')
    }

    return [
      undefined,
      new LoginUserDto(email.toLowerCase(), password)
    ]
  }
}
