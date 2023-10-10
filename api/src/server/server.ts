import express, {Application, Router} from 'express'
import cors from 'cors'


export interface Options {
    port?: number;
    routes:Router;
}

export default class Server {

    private readonly app: Application = express();
    private readonly port: number;
    private readonly routes: Router
   
    constructor(options: Options){

        const {port = 3300, routes} = options
        this.port = port;
        this.routes = routes
    }

    middlewares() {
        this.app.use(cors());
        this.app.use( express.json() )
    }

    start() {

        this.app.use( express.json());

        this.app.use( express.urlencoded( { extended:true} ));

        this.app.use(this.routes);

        this.app.listen(this.port, () =>  {
            console.log(`Server running on port ${this.port}`)
        })
    }
}