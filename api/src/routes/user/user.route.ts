import { Router } from 'express';
import { UserController } from '../../controllers/user.controller';


export class UserRoute {
   static get routes(): Router {
      const route = Router();
      const user_controller = new UserController();
      route.post('/users', user_controller.create);
      return route;
   }
}
