import { Router } from "express";
import { AuthControllerTemplate } from "../../controllers/auth.controller-template";
import jwtPassport from "../../config/passportJwt"

// TEMPLATE DE REFERENCIA
export class AuthRoutesTemplate {
    
    static get routes(): Router{
        
        const authRouter = Router();

        const controller = new AuthControllerTemplate();

        authRouter.post('/auth/register', controller.registerUser);
        authRouter.post('/auth/login', jwtPassport.authenticate('jwt',{session:false},controller.loginUser));

        return authRouter
    }
}

