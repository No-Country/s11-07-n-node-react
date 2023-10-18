
import mongoose, { Model, Schema } from "mongoose";



export interface UserData extends Document {
   first_name: string;
   last_name: string;
   email: string;
   password: string;
   city: string;
}

const userSchema = new Schema({

   first_name: {
         type: String
      ,  required: [true, 'The first name is required']
   }

   , last_name: {
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

   , city: {
      type: String
   }
});


export const UserModel: Model<UserData> = mongoose.model<UserData>('Usuario', userSchema);
