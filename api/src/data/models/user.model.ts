import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },

  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },

  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters']
  },

  roles: { type: [String], default: ['USER'], enum: ['ADMIN', 'USER', 'WORKER'], required: true },

  isActive: {
    type: Boolean,
    default: true
  },

  city: {
    type: String,
    default: ''
  },

  portfolio: { type: Schema.Types.ObjectId, ref: 'Portfolio' },

  availabilityStatus: {
    type: String,
    enum: ['Available', 'Occupied', 'Out of service'],
    default: 'Available'
  }
})

export const UserModel = mongoose.model('User', userSchema)
