import { Document } from 'mongoose'
import { AvailabilityStatusEnum } from '../models/add-work/add-work.model'

export interface AddWorkEntity extends Document {
  typeService: string
  experienceYears: number
  name: string
  category: string
  quantity: number
  currency: string
  isActive: boolean
  located: string
  unitAmount: number
  images: string[]
  description: string
  availabilityStatus: AvailabilityStatusEnum
}
