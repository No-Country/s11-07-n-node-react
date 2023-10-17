import { Request, Response } from 'express';
import { UserService, EmailFoundedError, UserDataError } from "../services/user.service";

export class UserController {
   async create(req: Request, res: Response) {
      const { email, nombre, apellido, ciudad, contraseña } = req.body
      const users = new UserService();
      try {
         await users.push(nombre, apellido, email, contraseña, ciudad);
         return res.status(201).json({ mensaje: `Se registró exitosamente con el email ${req.body.email}.` })
      } catch (error: unknown) {
         if (error instanceof EmailFoundedError) {
            return res.status(400).json({
               mensaje: error.message
            })
         }

         if (error instanceof UserDataError) {
            return res.status(400).json({
               mensaje: error.message
            })
         }
      }
   }
}