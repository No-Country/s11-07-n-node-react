import { Request, Response } from 'express';
import Router from 'express'
import { UserService } from '../../services/user.service'

export class UserRoute {
   static routes() {
      const route = Router();
      route.post( '/users', async function (req: Request, res: Response) {
         const { first_name, last_name, email, password, city } = req.body
         const users = new UserService();
         try {
            users.push(first_name, last_name, email, password, city);
            res.status(201).json({ mensaje: `Se registró exitosamente con el email ${req.body.email}.` })
         } catch (error) {
         }
      })
      return route;
   }
}
