import { Request, Response } from 'express';
import { UserService, EmailFoundedError, UserDataError } from "../services/user.service";
import { UserEntity } from '../data/entities/user.entity';
import { EmailInvalidError, PasswordInvalid } from '../config/validators';

export class UserController {
   async create(req: Request, res: Response) {
      const { first_name, last_name, email, password, city } = req.body

      try {
         const user_entity = new UserEntity(first_name, last_name, email, password, city)
         const users = new UserService()
         await users.push( user_entity )

         return res.status(201).json({ message: `User created` })

      } catch (error: any) {
         if (error instanceof EmailFoundedError ||
            error instanceof UserDataError ||
            error instanceof EmailInvalidError ||
            error instanceof PasswordInvalid) {

            return res.status(400).json({
               message: error.message
            })
         }

         res.status( 404 ).json( {message: error.message })
      }
   }
}