import express, { Application, Router } from 'express'
import cors from 'cors'
import { NextFunction, type Request, type Response } from 'express'
import { UserDataError } from '../config/handlerErrors'

export interface Options {
  port?: number
  routes: Router
}

export default class Server {
  private readonly app: Application = express()
  private readonly port: number
  private readonly routes: Router

  constructor (options: Options) {
    const { port = 3300, routes } = options
    this.port = port
    this.routes = routes
  }

  middlewares (): void {
    this.app.use(cors())
    this.app.use(express.json())
    // Middleware para manejo de errores personalizados
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof UserDataError) {
        res.status(err.statusCode).json({ error: err.message })
      } else {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })
  }

  start (): void {
    this.app.use(express.json())

    this.app.use(express.urlencoded({ extended: true }))

    this.app.use(this.routes)

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
