import { UserDataError } from '../../config/handlerErrors'
import { Validators } from '../../config/validators'

export class UpdateUserDto {
  private constructor (
    public firstName?: string,
    public city?: string,
    public lastName?: string,
    public password?: string

  ) {}

  static updateUser (object: Record<string, unknown>): [string?, UpdateUserDto?] {
    const { firstName, lastName, password, city } = object

    const allowedProperties = ['firstName', 'lastName', 'password', 'city']
    for (const key in object) {
      if (!allowedProperties.includes(key)) {
        throw UserDataError.badRequest(`The field ${key} is incorrect or cannot be edited`)
      }
    }
    if (firstName !== undefined && firstName !== '') {
      if (typeof firstName !== 'string' || !Validators.isValidFirstName(firstName)) {
        throw UserDataError.badRequest('First Name is not valid')
      }
    }
    if (lastName !== undefined && lastName !== '') {
      if (typeof lastName !== 'string' || !Validators.isValidLastName(lastName)) {
        throw UserDataError.badRequest('Last Name is not valid')
      }
    }
    if (password !== undefined && password !== '') {
      if (typeof password !== 'string' || !Validators.isValidPassword(password)!) {
        throw UserDataError.badRequest('Password too short or not valid')
      }
    }

    // Validación de city solo si se proporciona
    if (city !== undefined && city !== '') {
      if (typeof city !== 'string' || !Validators.isValidCity(city)) {
        throw UserDataError.badRequest('City is not valid')
      }
    }

    return [
      undefined,
      new UpdateUserDto(firstName, city, lastName, password)
    ]
  }
}
