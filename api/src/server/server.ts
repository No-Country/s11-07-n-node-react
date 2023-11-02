import express, { Application, Router } from 'express'
import cors from 'cors'
import { NextFunction, type Request, type Response } from 'express'
import { UserDataError } from '../config/handlerErrors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../config/swagger'
import { Server as ServerSocket } from 'socket.io'
import http from 'http'

export interface Options {
  port?: number
  routes: Router
}

export default class Server {
  private readonly app: Application = express()
  private readonly port: number
  private readonly routes: Router
  private readonly hettpServer: http.Server
  private readonly io: ServerSocket

  constructor (options: Options) {
    process.env.NODE_ENV = 'development'
    const { port = 3300, routes } = options
    this.port = port
    this.routes = routes
    this.setupSwaggerDocs()

    this.hettpServer = http.createServer(this.app)
    this.io = new ServerSocket(this.hettpServer)
    this.middlewares()
    this.setupSocketIO()
  }

  middlewares (): void {
    // Middleware para manejo de errores personalizados
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof UserDataError) {
        res.status(err.statusCode).json({ error: err.message })
      } else {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    })

    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack)
      res.status(500).send('Something broke!')
    })

    this.app.use(cors())
    this.app.use(express.json())
  }

  private setupSwaggerDocs (): void {
    this.app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    this.app.get('/api/v1/docs.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(swaggerSpec)
    })

    console.log(`Version 1 Docs available at http://localhost:${this.port}/api/v1/docs`)
  }

  private setupSocketIO (): void {
    this.io.on('connection', async (socket) => {
      console.log('Cliente conectado')

      socket.on('chat message', (msg) => {
        console.log(`Mensaje del cliente: ${msg}`)
        // Puedes emitir mensajes a otros clientes o realizar otras acciones aquí
      })

      socket.on('disconnect', () => {
        console.log('Cliente desconectado')
      })

      // socket.on('chat message', async (msg) => {
      //   let result
      //   const username = socket.handshake.auth.username ?? 'anonymous'
      //   console.log({ username })
      //   try {
      //     result = await db.execute({
      //       sql: 'INSERT INTO messages (content, user) VALUES (:msg, :username)',
      //       args: { msg, username }
      //     })
      //   } catch (e) {
      //     console.error(e)
      //     return
      //   }

      //   this.io.emit('chat message', msg, result.lastInsertRowid.toString(), username)
      // })

      // if (!socket.recovered) { // <- recuperase los mensajes sin conexión
      //   try {
      //     const results = await db.execute({
      //       sql: 'SELECT id, content, user FROM messages WHERE id > ?',
      //       args: [socket.handshake.auth.serverOffset ?? 0]
      //     })

      //     results.rows.forEach(row => {
      //       socket.emit('chat message', row.content, row.id.toString(), row.user)
      //     })
      //   } catch (e) {
      //     console.error(e)
      //   }
      // }
    })
  }

  start (): void {
    this.app.use(express.json())
    this.app.use( cors() )

    this.app.use(express.urlencoded({ extended: true }))

    this.app.use(express.static('client'))

    this.app.use(this.routes)

    this.hettpServer.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
