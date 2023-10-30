import { Router } from 'express'
import { AddWorkController } from '../../controllers/add-work.controller'

export class AddWorkRoute {
  static get routes (): Router {
    const route = Router()
    const WORKER_CONTROLLER = new AddWorkController()

    route.post('/services/:action', WORKER_CONTROLLER.addService)

    /**
 * @swagger
 * components:
 *   schemas:
 *     AddWork:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         experienceYears:
 *           type: number
 *         typeService:
 *           type: string
 *         provider:
 *           type: string
 *         category:
 *           type: string
 *         quantity:
 *           type: number
 *         currency:
 *           type: string
 *         isActive:
 *           type: boolean
 *         located:
 *           type: string
 *         unitAmount:
 *           type: number
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         description:
 *           type: string
 *         availabilityStatus:
 *           type: string
 *       required:
 *         - experienceYears
 *         - name
 *         - typeService
 *         - provider
 *         - category
 *         - quantity
 *         - currency
 *         - unitAmount
 *         - images
 *         - isActive
 *         - located
 *         - description
 *         - availabilityStatus
 *       example:
 *         name: "Servicio de plomeria basica"
 *         experienceYears: 8
 *         typeService: "serviceElectrician"
 *         provider: "653efc9c62a8d759ebfb8bc5"
 *         category: "Plomeria"
 *         quantity: 1
 *         currency: "usd"
 *         isActive: true
 *         located: "Buenos Aires"
 *         unitAmount: 100
 *         images: [
 *           "https://twyzle-s3-1.s3.amazonaws.com/networks/1/sites/16376/plomeria-contreras-header-mobile.jpg"
 *         ]
 *         description: "Servicio de Plomeria para reparaciones en la Buenos Aires"
 */

    /**
     * @swagger
     * /services/update-service:
     *   post:
     *     summary: Editar servicio de trabajador
     *     description: Editar servicio de trabajador.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/AddWork'
     *     responses:
     *       '200':
     *         description: Error de portafolio.
     *       '400':
     *         description: Error en los datos de entrada.
     *       '500':
     *         description: Error interno del servidor.
     */
    route.patch('/services/:actions', WORKER_CONTROLLER.updateService)

    route.delete('/services/:actions', WORKER_CONTROLLER.deleteService)

    /**
     * @swagger
     * /services/{actions}:
     *   get:
     *     summary: Obtener servicio de trabajador
     *     description: Obtener servicio de trabajador.
     *     parameters:
     *       - in: path
     *         name: Example get-service
     *         required: true
     *         schema:
     *           type: string
     *     example:
     *       get-service
     *     responses:
     *       '200':
     *         description: Error de portafolio.
     *       '400':
     *         description: Error en los datos de entrada.
     *       '500':
     *         description: Error interno del servidor.
     */
    route.get('/services/search/:id', WORKER_CONTROLLER.findArrayServiceById)

    return route
  }
}
