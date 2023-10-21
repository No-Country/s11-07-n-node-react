import { UserDataError } from '../../config/handlerErrors'
import { Validators } from '../../config/validators'

export class RegisterUserDto {
  private constructor (
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public city?: string
  ) {}

  static create (object: Record<string, unknown>): [string?, RegisterUserDto?] {
    const { firstName, lastName, email, password } = object

    if (typeof firstName !== 'string' || !Validators.isValidFirstName(firstName)) {
      throw UserDataError.badRequest('First Name is not valid')
      // return ['First Name is not valid']
    }

    if (typeof lastName !== 'string' || !Validators.isValidLastName(lastName)) {
      // return ['Last Name is not valid']
      throw UserDataError.badRequest('Last Name is not valid')
    }

    if (typeof email !== 'string' || !Validators.isValidEmail.test(email)) {
      // return ['Email is not valid']
      throw UserDataError.badRequest('Email is not valid')
    }

    if (typeof password !== 'string' || !Validators.isValidPassword(password)!) {
      // return ['Password too short or not valid']
      throw UserDataError.badRequest('Password too short or not valid')
    }

    return [
      undefined,
      new RegisterUserDto(firstName.toLowerCase(), lastName.toLowerCase(), email.toLowerCase(), password)
    ]
  }
}
