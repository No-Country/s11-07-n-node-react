import { Router } from "express";
import { AuthRoutesTemplate } from "./auth/auth.routes-template";
import { UserRoute } from "./user/user.route";


export class AppRoutes {

    static get routes(): Router {
 
        const router = Router();

        router.use('/api/v1', AuthRoutesTemplate.routes);
        router.use('/api/v1', UserRoute.routes );

        return router
    }
}