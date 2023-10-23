import { Router } from 'express'
import { UserController } from '../../controllers/user.controller'

export class UserRoute {
  static get routes (): Router {
    const route = Router()
    const USER_CONTROLLER = new UserController()
    // route.post('/users', USER_CONTROLLER.create)
    route.get('/users', USER_CONTROLLER.getAllUsers)
    route.get('/users/:id', USER_CONTROLLER.getUserById)
    route.patch('/users/:id', USER_CONTROLLER.updateUser)
    route.delete('/users/:id', USER_CONTROLLER.deleteUser)
    return route
  }
}
