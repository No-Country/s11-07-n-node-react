import mongoose from 'mongoose'

interface Portfolio {
  _id: mongoose.Types.ObjectId
  name?: string
  serviceElectrician?: string[]
  servicePlumber?: string[]
  servicePainter?: string[]
  serviceMechanic?: string[]
}

export interface PortfolioEntity extends Portfolio, Document {

}
