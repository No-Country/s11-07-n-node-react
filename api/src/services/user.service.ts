import { BcryptAdapter } from "../config/bcrypt";
import { UserModel } from "../data/models/user.model"

export class EmailFoundedError {
   message: string = `No fué posible registrase con el email suministrado. Contáctese con la administración.`
}

export class UserDataError {
   message: string;
   constructor( message: string ) {
      this.message = message;
   }
}

export class UserService {
   async push( first_name: string, last_name: string, email: string, password: string, city: string) {
      const user_data = {
         nombre: first_name, apellido: last_name, email: email, 
         password: BcryptAdapter.hash( password ), ciudad: city
      }

      try {
         const user_searched = UserModel.find({ email: email })
         if (user_searched != undefined || user_searched != null) {
            let user = new UserModel(user_data);
            const user_saved = await user.save()

         }
      } catch( error: any) {
         const date = new Date();
         let message = `>> ${date.toISOString()}\t`

         if( !Object.keys( error ).includes( 'errors' ) ) {
            throw new EmailFoundedError();
         }

         const property = Object.keys(error.errors).pop() || '__prototype'
         const user_data_error = error.errors[property].properties.message;
         console.log( user_data_error )
         throw new UserDataError( user_data_error )
      }
   }
}