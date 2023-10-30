import { AddWorkDto } from '../data/dtos/add-work.dto'

enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  WORKER = 'WORKER',
}
export enum CategoryType {
  electricity = 'electricity',
  painting = 'painting',
  mechanics = 'mechanics',
  gardening = 'gardening',
}

export enum CurrencyType {
  usd = 'usd',
  cop = 'cop',
  ars = 'ars',
  eur = 'eur',
}

export class Validators {
  static readonly isValidEmail: RegExp = /^[a-zA-Z0-9._\-%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  static isValidPassword (password: string): boolean {
    if (typeof password === 'string' && password !== null && password.trim() !== '') {
      return /^.{8,16}$/.test(password)
    }
    return false
  }

  static isValidFirstName (firstName: string): boolean {
    if (typeof firstName === 'string' && firstName !== null && firstName.trim() !== '') {
      // La expresión regular permite letras (mayúsculas y minúsculas), espacios y letras con acentos.
      return /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]{2,}$/.test(firstName)
    }
    return false
  }

  static isValidLastName (lastName: string): boolean {
    if (typeof lastName === 'string' && lastName !== null && lastName.trim() !== '') {
      // La expresión regular permite letras (mayúsculas y minúsculas), espacios y letras con acentos.
      return /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ ]{2,}$/.test(lastName)
    }
    return false
  }

  // static isValidCity (city: string | undefined): boolean {
  //   if (typeof city === 'string' && city !== null && city !== '') {
  //     return /^[A-Za-z0-9\s!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]{2,}$/.test(city)
  //   }
  //   return false
  // }

  static isValidCity (city: string | undefined): boolean {
    if (typeof city === 'string' && city !== null && city !== '') {
      return /^[\p{L}\p{N}\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/u.test(city)
    }
    return false
  }

  static isValidRoles (roles: UserRole[]): boolean {
    if (Array.isArray(roles) && roles.length > 0) {
      // Verificar que todos los roles estén en el enum UserRole
      return roles.every(role => Object.values(UserRole).includes(role))
    }
    return false
  }

  static isValidStatus (status: boolean): boolean {
    if (typeof status === 'boolean') {
      return true
    }
    return false
  }

  static validateUnitAmount (unitAmount: number): boolean {
    if (unitAmount && unitAmount < 1000) {
      return false
    }
    return true
  }

  static validateTypeService (typeService: string): boolean {
    if (typeService !== null || typeService !== '' || typeService !== undefined) {
      return true
    }
    return false
  }

  static validateNumber (data: number): boolean {
    if (data && data <= 0) {
      return false // No cumple con el requisito mínimo
    }
    return true
  }

  static validateDescription (data: string): boolean {
    if (typeof data === 'string' && data !== null && data !== '') {
      return /^[\p{L}\p{N}\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]+$/u.test(data)
    }
    return true
  }

  static validateCategory (category: string): boolean {
    return Object.values(CategoryType).includes(category as CategoryType)
  }

  static validateCurrency (currency: string): boolean {
    return Object.values(CurrencyType).includes(currency as CurrencyType)
  }

  static isValidImages (images: string[]): boolean {
    if (typeof images === 'string') {
      return true // Las imágenes están ausentes o son nulas, lo cual es válido
    }

    if (Array.isArray(images)) {
      // Verificar que todas las entradas en el array sean cadenas de caracteres (URLs)
      return images.every((image) => typeof image === 'string')
    }

    return false // El valor no es un array válido de cadenas de caracteres
  }

  static validateAddWorkDto (dto: AddWorkDto): boolean {
    // Verifica si unitAmount es menor que 1000
    if (dto.unitAmount && dto.unitAmount < 1000) {
      return false // No cumple con el requisito mínimo
    }
    return true // Cumple con el requisito mínimo
  }
}
