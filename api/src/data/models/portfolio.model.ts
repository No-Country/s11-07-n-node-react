import mongoose, { Schema } from 'mongoose'
import { PortfolioEntity } from '../entities/portfolio.entity'

const PortfolioSchema = new Schema<PortfolioEntity>({
  name: String,
  serviceElectrician: [String],
  servicePlumber: [String],
  servicePainter: [String],
  serviceMechanic: [String]
})

const PortfolioModel = mongoose.model<PortfolioEntity>('Portfolio', PortfolioSchema)
export default PortfolioModel
