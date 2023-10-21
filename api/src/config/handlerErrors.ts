export class UserDataError extends Error {
  constructor (
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message)
  }

  static badRequest (message: string): Error {
    return new UserDataError(400, message)
  }

  static internalServer (message: string = 'Internal Server Error'): Error {
    return new UserDataError(500, message)
  }

  static unauthorized (message: string): Error {
    return new UserDataError(401, message)
  }

  static conflict (message: string): Error {
    return new UserDataError(409, message)
  }

  static handleCommonErrors (condition: boolean, errorMessage: string): void {
    if (condition) {
      throw UserDataError.badRequest(errorMessage)
    }
  }
}
