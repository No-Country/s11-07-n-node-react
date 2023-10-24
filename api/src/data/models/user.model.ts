import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({

  firstName: {
    type: String,
    required: [true, 'The first name is required']
  },

  lastName: {
    type: String,
    required: [true, 'The last name is required']
  },

  email: {
    type: String,
    required: [true, 'The email must be entered'],
    unique: [true, 'The email is already registered']
  },

  password: {
    type: String,
    required: [true, 'The password must be entered'],
    minlength: [8, 'The password must be at least 8 characters']
  },

  roles: {
    type: String,
    default: 'USER',
    enum: ['ADMIN', 'USER', 'WORKER']
  },

  isActive: {
    type: Boolean,
    default: true
  },

  city: {
    type: String,
    default: ''
  }
})

export const UserModel = mongoose.model('Usuario', userSchema)
