
import mongoose, { Model, Schema } from "mongoose";



// Template de base para modelo de usuario
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    roles: string[];
    imgUrl: string;
  }

const userSchema  = new Schema( {

name:{
    type: String,
    required: [true, 'Name is required'],
    minlength: [1, 'Name must have at least 1 character']
},

 email: {
    type: String,
    required: [true, 'Email is required'],
    unique:true
 },

 password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 8 characters long']
 },

 roles: {
    type: [String],
    default: ['USER_ROLE'],
    enum: ['USER_ADMIN', 'USER_ROLE', 'USER_CLIENT', 'USER_SERVICES']
 },

 imgUrl: {
    type: String,
    default: ''
 }

});


export const UserModel: Model<IUser> = mongoose.model<IUser>('User', userSchema);
