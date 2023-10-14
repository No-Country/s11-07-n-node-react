
import mongoose, { Model, Schema } from "mongoose";



export interface UserModel extends Document {
   nombre: string;
   apellido: string;
   email: string;
   password: string;
   ciudad: string;
}

const userSchema = new Schema({

   nombre: {
      type: String
      , required: [true, 'El nombre de la persona es requerido']
   }

   , apellido: {
      type: String
      , required: [true, 'El apellido de la persona es requerido']
   }

   , email: {
      type: String,
      required: [true, 'El email debe ser ingresado'],
      unique: true
   }

   , password: {
      type: String,
      required: [true, 'La contraseña es necesaria para el acceso'],
      minlength: [8, 'La contraseña debe ser en almenos de 8 caracteres']
   }

   , ciudad: {
      type: String
   }
});


export const UserModel: Model<UserModel> = mongoose.model<UserModel>('Usuario', userSchema);
