// import { AvailabilityStatusEnum } from '../models/add-work/add-work.model'
// export interface AddWorkDto {
//   typeService: string
//   experienceYears?: number
//   name?: string
//   category?: string
//   quantity?: number
//   currency?: string
//   isActive?: boolean
//   located?: string
//   unitAmount?: number
//   images?: string[]
//   description?: string
//   availabilityStatus?: AvailabilityStatusEnum
// }

import { UserDataError } from '../../config/handlerErrors'
import { CategoryType, CurrencyType, Validators } from '../../config/validators'

export class AddWorkDto {
  private constructor (
    public typeService?: string,
    public experienceYears?: number,
    public category?: CategoryType,
    public quantity?: number,
    public currency?: CurrencyType,
    public located?: string,
    public unitAmount?: number,
    public description?: string,
    public images?: string[] | null | undefined

  ) {}

  static create (object: Record<string, unknown>): [string?, AddWorkDto?] {
    const { typeService, experienceYears, category, quantity, currency, located, unitAmount, images, description, availabilityStatus, isActive, name } = object

    if (typeof unitAmount !== 'number' || !Validators.validateUnitAmount(unitAmount)) {
      throw UserDataError.badRequest('UnitAmount is not valid is minor to 1000 cents')
    }

    if (typeof typeService !== 'string' || !Validators.validateTypeService(typeService)) {
      throw UserDataError.badRequest('Type Service is not valid')
    }

    if (typeof experienceYears !== 'number' || !Validators.validateNumber(experienceYears)) {
      throw UserDataError.badRequest('Experience Years is not valid')
    }

    if (typeof quantity !== 'number' || !Validators.validateNumber(quantity)) {
      throw UserDataError.badRequest('Quantity is not number is not valid')
    }

    if (typeof category !== 'string' || !Validators.validateCategory(category)) {
      throw UserDataError.badRequest('Category is not category is not valid')
    }

    if (typeof currency !== 'string' || !Validators.validateCurrency(currency)) {
      throw UserDataError.badRequest('Currency is not currency is not valid')
    }

    if (typeof description !== 'string' || !Validators.validateDescription(description)) {
      throw UserDataError.badRequest('Description is not valid')
    }

    if (name !== undefined) {
      if (typeof name !== 'string' || !Validators.validateDescription(name)) {
        throw UserDataError.badRequest('Name is not valid')
      }
    }

    // Validación de isActive solo si se proporciona
    if (isActive !== undefined) {
      if (typeof isActive !== 'boolean' || !Validators.isValidStatus(isActive)) {
        throw UserDataError.badRequest('Status is not valid')
      }
    }

    // Validación de located solo si se proporciona
    if (located !== undefined && located !== '') {
      if (typeof located !== 'string' || !Validators.isValidCity(located)) {
        throw UserDataError.badRequest('Located is not valid')
      }
    }

    // Validación de located solo si se proporciona
    if (images !== undefined || images !== null) {
      if (!Array.isArray(images) || !Validators.isValidImages(images)) {
        throw UserDataError.badRequest('Images is not valid')
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
      new AddWorkDto(typeService, experienceYears, category as CategoryType, quantity, currency as CurrencyType, located, unitAmount, description, images)
    ]
  }
}
