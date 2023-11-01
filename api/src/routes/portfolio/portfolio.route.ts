import { Router } from 'express'
import { PortfolioController } from '../../controllers/portfolio.controller'

export class PortfolioRoutes {
  static get routes (): Router {
    const route = Router()
    const PORTFOLIO_CONTROLLER = new PortfolioController()

    /**
     * @swagger
     * /portfolios:
     *   get:
     *     summary: Obtener todos los portafolios
     *     description: Obtiene una lista de todos los portafolios registrados en el sistema.
     *     responses:
     *       '200':
     *         description: Respuesta exitosa. Devuelve una lista de usuarios.
     *       '500':
     *         description: Error interno del servidor.
     */
    route.get('/portfolios', PORTFOLIO_CONTROLLER.getAllPortfolios)

    /**
     * @swagger
     * components:
     *   schemas:
     *     Portfolio:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *         serviceElectrician:
     *           type: array
     *           items:
     *             type: string
     *         servicePlumber:
     *           type: array
     *           items:
     *             type: string
     *         servicePainter:
     *           type: array
     *           items:
     *             type: string
     *         serviceMechanic:
     *           type: array
     *           items:
     *             type: string
     *       required:
     *         - id
     *       example:
     *         id: 653efc9c62a8d759ebfb8bc5
     */

    /**
     * @swagger
     * /portfolio/id:
     *     get:
     *       security:
     *        - bearerAuth: []
     *     summary: Obtener un portafolio de usuario por ID
     *     description: Obtiene un portafolio por su ID.
     *     responses:
     *       '200':
     *         description: Respuesta exitosa. Devuelve el portafolio especificado.
     *       '404':
     *         description: Portafolio no encontrado.
     *       '500':
     *         description: Error interno del servidor.
     */

    /**
     * @swagger
     * components:
     *   securitySchemes:
     *     bearerAuth:
     *       type: http
     *       scheme: bearer
     *       bearerFormat: JWT
     */
    route.get('/portfolio/id', PORTFOLIO_CONTROLLER.findPortfolioById)

    // route.post('/create-portfolio', PORTFOLIO_CONTROLLER.createPortfolio)
    // route.put('/update-portfolio/:id', PORTFOLIO_CONTROLLER.updatePortfolio)
    // route.delete('/delete-portfolio/:id', PORTFOLIO_CONTROLLER.deletePortfolio)

    return route
  }
}
