import {Request, Response} from 'express'


// Es un template de controlador usando clases en typescript
export class UsersControllerTemplate {

    constructor() {}

    getAllUsers = (req: Request, res: Response) => {

        res.json({
            msg: 'get all users - controller'
        })
    }
    

    getUserById = (req: Request, res: Response) => {

        res.json({
            msg: 'get user by id - controller'
        })
    }

}