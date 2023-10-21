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
      return /^[A-Za-z]{2,}$/.test(firstName)
    }
    return false
  }

  static isValidLastName (lastName: string): boolean {
    if (typeof lastName === 'string' && lastName !== null && lastName.trim() !== '') {
      return /^[A-Za-z]{2,}$/.test(lastName)
    }
    return false
  }
}
