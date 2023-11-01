import mongoose, { Schema } from 'mongoose'
import { PortfolioEntity } from '../entities/portfolio.entity'

const PortfolioSchema = new Schema<PortfolioEntity>({
  name: String,
  serviceElectrician: { type: [String], default: [''] },
  servicePlumber: { type: [String], default: [''] },
  servicePainter: { type: [String], default: [''] },
  serviceMechanic: { type: [String], default: [''] }
})

const PortfolioModel = mongoose.model<PortfolioEntity>('Portfolio', PortfolioSchema)
export default PortfolioModel
