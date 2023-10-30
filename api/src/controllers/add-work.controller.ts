import { Request, Response } from 'express'
import { JwtAdapter } from '../config/jwt'

import { UserDataError } from '../config/handlerErrors'
import { AddWorkService } from '../services/add-work.service'
import { AddWorkDto } from '../data/dtos/add-work.dto'

export class AddWorkController {
  async addService (req: Request, res: Response): Promise<void> {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token) {
        res.status(401).json({ error: 'You must log in' })
        return
      }

      // Validar el token JWT utilizando tu función validatedToken
      const decodedToken = await JwtAdapter.validatedToken<{ id: string }>(token)

      if (!decodedToken) {
        res.status(401).json({ error: 'Token not valid' })
        return
      }

      // Ahora puedes acceder al ID del usuario desde el token decodificado
      const userId = decodedToken.id

      const [, SERVICE_DATA] = AddWorkDto.create(req.body)
      // const SERVICE_DATA = req.body

      const addService = new AddWorkService()

      await addService.managerServicesUser(userId, SERVICE_DATA!, 'add-service')

      res.status(200).json({ message: 'Add Service' })
    } catch (error: unknown) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error' })
      }
    }
  }

  async updateService (req: Request, res: Response): Promise<void> {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token) {
        res.status(401).json({ error: 'You must log in' })
        return
      }

      const decodedToken = await JwtAdapter.validatedToken<{ id: string }>(token)

      if (!decodedToken) {
        res.status(401).json({ error: 'Token not valid' })
        return
      }

      const userId = decodedToken.id

      const addService = new AddWorkService()
      await addService.managerServicesUser(userId, req.body, 'update-service')
      res.status(200).json({ message: 'Updated Service' })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async deleteService (req: Request, res: Response): Promise<void> {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token) {
        res.status(401).json({ error: 'You must log in' })
        return
      }

      const decodedToken = await JwtAdapter.validatedToken<{ id: string }>(token)

      if (!decodedToken) {
        res.status(401).json({ error: 'Token not valid' })
        return
      }

      const userId = decodedToken.id

      const addService = new AddWorkService()
      await addService.managerServicesUser(userId, req.body, 'delete-service')
      res.status(200).json({ message: 'Deleted Service' })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }

  async findArrayServiceById (req: Request, res: Response): Promise<void> {
    try {
      const addService = new AddWorkService()
      const service = await addService.findArrayServiceById(req.params.id, req.body.typeService)
      res.status(200).json({ service })
    } catch (error) {
      if (error instanceof UserDataError) {
        res.status(error.statusCode).json({ error: error.message })
      }
      if (!(error instanceof UserDataError)) {
        res.status(500).json({ error: 'Internal Server Error controlador' })
      }
    }
  }
}
