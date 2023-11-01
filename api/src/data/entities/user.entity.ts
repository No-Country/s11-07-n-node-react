import mongoose, { Schema } from 'mongoose'

export class UserEntity {
  constructor (
    public _id: mongoose.Types.ObjectId,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public roles: string[],
    public isActive: boolean,
    public portfolio: Schema.Types.ObjectId,
    public city?: string,
    public availabilityStatus?: string
  ) {}
}
