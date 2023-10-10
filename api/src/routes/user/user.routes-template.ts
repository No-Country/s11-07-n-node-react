import { Router } from "express";
import { UsersControllerTemplate } from "../../controllers/users.controller-template";


export class UserRoutesTemplate {
    
    static get routes(): Router{
        
        const userRoutes = Router();

        const controller = new UsersControllerTemplate();

        userRoutes.get('/users', controller.getAllUsers);
        userRoutes.get('/users/:id', controller.getUserById );

        return userRoutes
    }
}