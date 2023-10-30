import mongoose from 'mongoose'

export class UserEntity {
  constructor (
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public roles?: string,
    public isActive?: boolean,
    public city?: string,
    public portfolio?: mongoose.Types.ObjectId,
    public availabilityStatus?: string,
    public id?: string
  ) {}
}
