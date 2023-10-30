import { UserDataError } from '../../config/handlerErrors'
import { Validators } from '../../config/validators'

export class RegisterUserDto {
  private constructor (
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string

  ) {}

  static create (object: Record<string, unknown>): [string?, RegisterUserDto?] {
    const { firstName, lastName, email, password, roles, isActive, city, portfolio, availabilityStatus } = object

    const allowedProperties = ['firstName', 'lastName', 'email', 'password', 'roles', 'isActive', 'city']
    for (const key in object) {
      if (!allowedProperties.includes(key)) {
        throw UserDataError.badRequest(`The field ${key} is not a user property`)
      }
    }

    if (typeof firstName !== 'string' || !Validators.isValidFirstName(firstName)) {
      throw UserDataError.badRequest('First Name is not valid')
    }

    if (typeof lastName !== 'string' || !Validators.isValidLastName(lastName)) {
      throw UserDataError.badRequest('Last Name is not valid')
    }

    if (typeof email !== 'string' || !Validators.isValidEmail.test(email)) {
      throw UserDataError.badRequest('Email is not valid')
    }

    if (typeof password !== 'string' || !Validators.isValidPassword(password)!) {
      throw UserDataError.badRequest('Password too short or not valid')
    }

    // Validación de roles solo si se proporciona
    if (roles !== undefined) {
      if (!Array.isArray(roles) || !Validators.isValidRoles(roles)) {
        throw UserDataError.badRequest('Roles is not valid')
      }
    }

    // Validación de isActive solo si se proporciona
    if (isActive !== undefined) {
      if (typeof isActive !== 'boolean' || !Validators.isValidStatus(isActive)) {
        throw UserDataError.badRequest('Status is not valid')
      }
    }

    // Validación de city solo si se proporciona
    if (city !== undefined && city !== '') {
      if (typeof city !== 'string' || !Validators.isValidCity(city)) {
        throw UserDataError.badRequest('City is not valid')
      }
    }

    // Validación de portfolioWorkerId solo si se proporciona
    if (portfolio !== undefined) {
      if (typeof portfolio !== 'string') {
        throw UserDataError.badRequest('Portfolio Worker Id is not valid')
      }
    }

    // Validación de availabilityStatus solo si se proporciona
    if (availabilityStatus !== undefined) {
      if (typeof availabilityStatus !== 'string') {
        throw UserDataError.badRequest('Availability Status is not valid')
      }
    }

    return [
      undefined,
      new RegisterUserDto(firstName.toLowerCase(), lastName.toLowerCase(), email.toLowerCase(), password)
    ]
  }
}
