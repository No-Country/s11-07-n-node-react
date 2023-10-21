import { Request, Response } from 'express'
import { UserService } from '../services/user.service'
import { RegisterUserDto } from '../data/dtos/create-user.dto'
import { UserDataError } from '../config/handlerErrors'

export class UserController {
  async create (req: Request, res: Response): Promise<void> {
    // ! Para evitar multiples instancias de la clase UserService sesaco del try catch
    const user = new UserService()

    // *  Se realiza desestructuración  arreglo que es devuelto por el método create de la clase RegisterUserDto al pasarle req.body y hacer las validaciones de los datos enviados por el front, luego se valida el error y de no ser undefined o null se ejecuta el try catch

    // const { first_name, last_name, email, password, city } = req.body
    // if (error !== undefined) {
    //   res.status(400).json({ error })
    //   return
    // }

    try {
      const [, USER_DATA] = RegisterUserDto.create(req.body)
      await user.push(USER_DATA!, res)

      res.status(201).json({ message: 'User created' })
    } catch (error: unknown) {
      // ! Estas validacione sse estan haciendo en el RegistesUserDto
      //  if (error instanceof EmailFoundedError ||
      //     error instanceof UserDataError ||
      //     error instanceof EmailInvalidError ||
      //     error instanceof PasswordInvalid) {

      //     return res.status(400).json({
      //        message: error.message
      //     })
      //  }

      //  res.status( 404 ).json( {message: error.message })
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async getAllUsers (req: Request, res: Response): Promise<void> {
    try {
      const users = await new UserService().findAllUsers()
      res.status(200).json({ users })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async getUserById (req: Request, res: Response): Promise<void> {
    try {
      const user = await new UserService().findUserById(req.params.id)
      res.status(200).json({ user })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  // async getUserById (req: Request, res: Response): Promise<void> {
  //   const user = await new UserService().findUserById(req.params.id)
  //   res.status(200).json({ user })
  // }

  // async getUserById (req: Request, res: Response): Promise<void> {
  //   try {
  //     const user = await new UserService().findUserById(req.params.id)
  //     res.status(200).json({ user })
  //   } catch (error: unknown) {
  //     if (error instanceof UserDataError) {
  //       res.status(error.statusCode).json({ error: error.message })
  //     }
  //     if (!(error instanceof UserDataError)) {
  //       res.status(500).json({ error: 'Internal Server Error controlador' })
  //     }
  //   }
  // }

  async updateUser (req: Request, res: Response): Promise<void> {
    try {
      await new UserService().updateUser(req.params.id, req.body)
      res.status(201).json({ message: 'User update' })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async deleteUser (req: Request, res: Response): Promise<void> {
    try {
      await new UserService().deleteUser(req.params.id)
      res.status(200).json({ message: 'User created' })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }
}
