enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  WORKER = 'WORKER',
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

  static isValidCity (city: string): boolean {
    if (typeof city === 'string' && city !== null && city !== '') {
      return /^[A-Za-z0-9\s!"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]{2,}$/.test(city)
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
}
