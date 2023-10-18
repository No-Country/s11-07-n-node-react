
import mongoose, { Model, Schema } from "mongoose";



export interface UserData extends Document {
   nombre: string;
   apellido: string;
   email: string;
   password: string;
   ciudad: string;
}

const userSchema = new Schema({

   nombre: {
         type: String
      ,  required: [true, 'The first name is required']
   }

   , apellido: {
         type: String
      ,  required: [true, 'The last name is required']
   }

   , email: {
         type: String
      ,  required: [true, 'The email must be entered']
      ,  unique: [true, 'The email is already registered']
   }

   , password: {
         type: String
      ,  required: [true, 'The password must be entered']
      ,  minlength: [8, 'The password must be at least 8 characters']
   }

   , ciudad: {
      type: String
   }
});


export const UserModel: Model<UserData> = mongoose.model<UserData>('Usuario', userSchema);
