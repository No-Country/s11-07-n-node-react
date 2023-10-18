import { BcryptAdapter } from "../config/bcrypt";
import { EmailInvalidError, EmailValidator } from "../config/validators";
import { UserEntity } from "../data/entities/user.entity-template";
import { UserModel } from "../data/models/user.model"

export class EmailFoundedError {
   message: string = `No fué posible registrase con el email suministrado. Contáctese con la administración.`
}

export class UserDataError {
   message: string;
   constructor(message: string) {
      this.message = message;
   }
}

export class UserService {
   async push(user_data: UserEntity) {

      try {
         
         EmailValidator.raises_an_error_if_email_is_invalid( user_data.email );

         const user_searched = UserModel.findOne({ email: user_data.email })
         if (user_searched != null) {
            user_data.password = BcryptAdapter.hash(user_data.password)
            let user = new UserModel(user_data)
            await user.save();
            console.info('>> INFO. USUARIO CREADO CON EL EMAIL', user_data.email)
         }

      } catch (error: any) {
         const date = new Date();
         let message = `>> ${date.toISOString()}\tLOG ${user_data}`

         if( error instanceof EmailInvalidError ) {
            throw error
         }

         if (!Object.keys(error).includes('errors')) {
            const email_error = new EmailFoundedError()
            console.log( ">> LOG", message.concat( email_error.message ) );
            throw email_error;
         }

         if (!Object.keys(error).includes('errors')) {
            const property = Object.keys(error.errors).pop() || '__prototype'
            const user_data_error = error.errors[property].properties.message;
            throw new UserDataError(user_data_error)
         }

         throw error;
      }

   }

}

