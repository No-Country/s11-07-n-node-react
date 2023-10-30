// import mongoose from 'mongoose'

import mongoose from 'mongoose'

// export class PortfolioEntity {
//   constructor (
//     public name: string,
//     // public services?: string[],
//     public serviceElectrician?: string[],
//     public servicePlumber?: string[],
//     public servicePainter?: string[],
//     public serviceMechanic?: string[],
//     public _id?: mongoose.Types.ObjectId
//   ) {}
// }

// export interface PortfolioEntity {
//   name: string
//   serviceElectrician?: string[]
//   servicePlumber?: string[]
//   servicePainter?: string[]
//   serviceMechanic?: string[]
//   _id?: mongoose.Types.ObjectId
//   __v?: number
// }

export interface PortfolioEntity extends mongoose.Document {
  name: string
  serviceElectrician?: string[]
  servicePlumber?: string[]
  servicePainter?: string[]
  serviceMechanic?: string[]
  id?: mongoose.Types.ObjectId
  // save: () => Promise<PortfolioEntity>
  // toObject: () => PortfolioEntity
}
