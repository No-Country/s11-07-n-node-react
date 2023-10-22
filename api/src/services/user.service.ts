import { Types } from 'mongoose'
import { BcryptAdapter } from '../config/bcrypt'
import { UserDataError } from '../config/handlerErrors'
import { UserEntity } from '../data/entities/user.entity'
import { UserModel } from '../data/models/user.model'
import { type Response } from 'express'
import { RegisterUserDto } from '../data/dtos/create-user.dto'

export class EmailFoundedError {
  message: string = 'Error registering. Contact administration'
}

//! Esta clase se movio a config/handleErros
// export class UserDataError {
//    message: string;
//    constructor(message: string) {
//       this.message = message;
//    }
// }

export class UserService {
  // ! se agrego el response al metodo para manejar la respuesta http de los errores
  // ! se cambio UserEntity por RegisterUserDto ya que este maneja la validacion de los datos del front y la del back la haremos con UserEntity
  async push (USER_DATA: RegisterUserDto, res: Response): Promise<UserEntity> {
    // *Para evitar instancias necesarias del modelo de usuario se valida si ya existe un usuario creado fuera del tryCatch

    // !Se renombraron constantes al formato "standar  eslint"  user_data -> USER_DATA
    const { firstName, lastName, email, password, ...data } = USER_DATA

    const emailExists = await UserModel.findOne({ email })

    if (emailExists !== null) {
      res.status(409).json({ message: 'User already exists' })
    }
    try {
      //! Se movio a config/validators.ts
      //  EmailValidator.raises_an_error_if_email_invalid(user_data.email);
      //  PasswordValidator.raises_an_error_if_password_invalid(user_data.password);

      // ! Se  esta encriptando desntro del mismo objeto del user cuando se crea, por ser mas practivo
      //  user_data.password = BcryptAdapter.hash(user_data.password)

      const newUser = await UserModel.create({
        firstName,
        lastName,
        email,
        password: BcryptAdapter.hash(USER_DATA.password),
        data
      })
      await newUser.save()
      return newUser.toObject() as UserEntity

      //! Lo veo inncesario, podriamos usar un loger para esto
      //  console.info('>> INFO. USUARIO CREADO CON EL EMAIL', USER_DATA.email)
    } catch (error: unknown) {
      //! Lo veo inncesario, podriamos usar un loger para esto
      //  const date = new Date();
      //  let message = `>> LOG ${date.toISOString()}\n\t${JSON.stringify(user_data)}\n`

      // ! Creo que la validación de errores usando los prototypes de las clases de validación es menos practico y mantenible que usar los errores personalizados
      //  if( error instanceof EmailInvalidError || error instanceof PasswordInvalid ) {
      //     console.log( message.concat( error.message ) )
      //     throw error
      //  }

      //  if (!Object.keys(error).includes('errors')) {
      //     const email_error = new EmailFoundedError()
      //     console.log( message.concat( email_error.message ) )
      //     throw email_error;
      //  }

      //  if (Object.keys(error).includes('errors')) {
      //     const property = Object.keys(error.errors).pop() || '__prototype'
      //     const user_data_error = error.errors[property].properties.message
      //     console.log( message.concat( user_data_error ) )
      //     throw new UserDataError(user_data_error)
      //  }

      //  console.log( error );

      //  throw error;
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async findAllUsers (): Promise<UserEntity[]> {
    const userDocuments = await UserModel.find().exec()

    const users: UserEntity[] = userDocuments.map((userDocument) => {
      return userDocument.toObject() as UserEntity
    })

    if (users.length === 0) {
      return [] as UserEntity[]
    }

    return users
  }

  // async findUserById (id: string): Promise<UserEntity> {
  //   UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')
  //   const userDoc = await UserModel.findById(id).exec()

  //   if (userDoc === null) {
  //     throw UserDataError.badRequest('User not found')
  //   }

  //   try {
  //     const user = userDoc.toObject() as UserEntity
  //     return user
  //   } catch (error) {
  //     if (error instanceof UserDataError) {
  //       throw error
  //     }
  //     throw UserDataError.internalServer()
  //   }
  // }

  async findUserById (id: string): Promise<UserEntity> {
    UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')
    const user = await UserModel.findById(id).exec()

    if (user === null) {
      throw UserDataError.badRequest('User not found')
    }

    return user.toObject() as UserEntity
  }

  async findOneUser (email: string): Promise<UserEntity> {
    const user = await UserModel.findOne({ email })

    if (user === null) {
      throw UserDataError.badRequest('User not found')
    }
    return user.toObject() as UserEntity
  }

  async updateUser (id: string, DATA_USER: RegisterUserDto): Promise<UserEntity> {
    UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')
    try {
      const userDoc = await UserModel.findByIdAndUpdate(id, DATA_USER, { new: true }).exec()

      if (userDoc === null) {
        throw UserDataError.badRequest('User not found')
      }

      const user = userDoc.toObject() as UserEntity

      return user
    } catch (error) {
      if (error instanceof UserDataError) {
        throw error
      }
      throw UserDataError.internalServer()
    }
  }

  async deleteUser (id: string): Promise<void> {
    UserDataError.handleCommonErrors(!Types.ObjectId.isValid(id), 'Invalid ObjectId')

    const user = await UserModel.findByIdAndDelete(id).exec()

    if (user === null) {
      throw UserDataError.badRequest('User not found')
    }
  }
}
