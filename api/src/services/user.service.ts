import { BcryptAdapter } from "../config/bcrypt";
import { EmailInvalidError, EmailValidator, PasswordInvalid, PasswordValidator } from "../config/validators";
import { UserEntity } from "../data/entities/user.entity";
import { UserModel } from "../data/models/user.model"

export class EmailFoundedError {
   message: string = 'Error registering. Contact administration'
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
         EmailValidator.raises_an_error_if_email_invalid(user_data.email);
         PasswordValidator.raises_an_error_if_password_invalid(user_data.password);

         user_data.password = BcryptAdapter.hash(user_data.password)
         let user = new UserModel(user_data)
         await user.save();
         console.info('>> INFO. USUARIO CREADO CON EL EMAIL', user_data.email)

      } catch (error: any) {
         const date = new Date();
         let message = `>> LOG ${date.toISOString()}\n\t${JSON.stringify(user_data)}\n`

         if( error instanceof EmailInvalidError || error instanceof PasswordInvalid ) {
            console.log( message.concat( error.message ) )
            throw error
         }

         if (!Object.keys(error).includes('errors')) {
            const email_error = new EmailFoundedError()
            console.log( message.concat( email_error.message ) )
            throw email_error;
         }

         if (Object.keys(error).includes('errors')) {
            const property = Object.keys(error.errors).pop() || '__prototype'
            const user_data_error = error.errors[property].properties.message
            console.log( message.concat( user_data_error ) )
            throw new UserDataError(user_data_error)
         }

         console.log( error );

         throw error;
      }

   }

}

