import { Router } from 'express'
import { UserController } from '../../controllers/user.controller'

export class UserRoute {
  static get routes (): Router {
    const route = Router()
    const USER_CONTROLLER = new UserController()

    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Obtener todos los usuarios
     *     description: Obtiene una lista de todos los usuarios registrados en el sistema.
     *     responses:
     *       '200':
     *         description: Respuesta exitosa. Devuelve una lista de usuarios.
     *       '500':
     *         description: Error interno del servidor.
     */

    route.get('/users', USER_CONTROLLER.getAllUsers)

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Obtener un usuario por ID
     *     description: Obtiene un usuario por su ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Respuesta exitosa. Devuelve el usuario especificado.
     *       '404':
     *         description: Usuario no encontrado.
     *       '500':
     *         description: Error interno del servidor.
     */
    route.get('/users/:id', USER_CONTROLLER.getUserById)

    /**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Actualizar un usuario
 *     description: Actualiza los detalles de un usuario existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               city:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - firstName
 *               - lastName
 *               - city
 *               - password
 *     responses:
 *       '200':
 *         description: Usuario actualizado exitosamente.
 *       '404':
 *         description: Usuario no encontrado.
 *       '400':
 *         description: Error en los datos de entrada.
 *       '500':
 *         description: Error interno del servidor.
 */

    route.patch('/users/:id', USER_CONTROLLER.updateUser)

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Eliminar un usuario
     *     description: Elimina un usuario por su ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       '200':
     *         description: Usuario eliminado exitosamente.
     *       '404':
     *         description: Usuario no encontrado.
     *       '500':
     *         description: Error interno del servidor.
     */
    route.delete('/users/:id', USER_CONTROLLER.deleteUser)

    return route
  }
}
