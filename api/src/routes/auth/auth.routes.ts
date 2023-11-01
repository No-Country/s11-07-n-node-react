import { Router } from 'express'
import { AuthController } from '../../controllers/auth.controller'

export class AuthRoutes {
  static get routes (): Router {
    const authRouter = Router()
    const controller = new AuthController()

    /**
     * @swagger
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       properties:
     *         firstName:
     *           type: string
     *         lastName:
     *           type: string
     *         email:
     *           type: string
     *         password:
     *           type: string
     *         roles:
     *           type: array
     *           items:
     *             type: string
     *         isActive:
     *           type: boolean
     *         city:
     *           type: string
     *       required:
     *         - firstName
     *         - lastName
     *         - email
     *         - password
     *         - roles
     *       example:
     *         firstName: John W
     *         lastName: Doe h
     *         email: example@mail.com
     *         password: abcd12345
     *         roles: [WORKER]
     */

    /**
     * @swagger
     * /auth/register:
     *   post:
     *     summary: Registro de usuario
     *     description: Registra un nuevo usuario en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       '200':
     *         description: Registro exitoso.
     *       '400':
     *         description: Error en los datos de entrada.
     *       '500':
     *         description: Error interno del servidor.
     */

    authRouter.post('/auth/register', controller.registerUser)

    /**
     * @swagger
     * components:
     *   schemas:
     *     LoginDto:
     *       type: object
     *       properties:
     *         email:
     *           type: string
     *         password:
     *           type: string
     *       required:
     *         - email
     *         - password
     *       example:
     *         email: example@mail.com
     *         password: abcd12345
     */

    /**
     * @swagger
     * /auth/login:
     *   post:
     *     summary: Login de usuario
     *     description: Inicio de sesión del usuario en el sistema.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/LoginDto'
     *     responses:
     *       '200':
     *         description: Registro exitoso.
     *       '400':
     *         description: Error en los datos de entrada.
     *       '500':
     *         description: Error interno del servidor.
     */

    authRouter.post('/auth/login', controller.loginUser)

    return authRouter
  }
}
