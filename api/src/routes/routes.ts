import { Router } from "express";
import { AuthRoutesTemplate } from "./auth/auth.routes-template";
import { UserRoutesTemplate } from "./user/user.routes-template";



export class AppRoutes {

    static get routes(): Router {
 
        const router = Router();

        router.use('/api/v1', AuthRoutesTemplate.routes);
        router.use('/api/v1', UserRoutesTemplate.routes);

        return router
    }
}