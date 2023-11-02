import mongoose, { Schema } from 'mongoose'
import { AddWorkEntity } from '../../entities/add-work.entity'

export enum AvailabilityStatusEnum {
  Available = 'Available',
  Occupied = 'Occupied',
  OutOfService = 'Out of service',
}

const AddWorkSchema = new Schema<AddWorkEntity>({
  typeService: {
    type: String
  },

  provider: {
    type: String,
    ref: 'User'
  },

  experienceYears: {
    type: Number
  },

  name: {
    type: String

  },
  category: {
    type: String

  },
  quantity: {
    type: Number

  },
  currency: {
    type: String

  },
  isActive: {
    type: Boolean,
    default: true
  },
  located: {
    type: String

  },
  unitAmount: {
    type: Number

  },
  images: {
    type: [String]

  },
  description: {
    type: String

  },
  availabilityStatus: {
    type: String,
    enum: Object.values(AvailabilityStatusEnum),
    default: AvailabilityStatusEnum.Available
  }
})

const AddWorkModel = mongoose.model<AddWorkEntity>('AddWork', AddWorkSchema)

export default AddWorkModel
