import passport from 'passport'
import JwtStrategy from 'passport-jwt'
import {ExtractJwt}from 'passport-jwt'
import { envs } from './envs.config';
//import  {UserServices} from '../services/users.services'   // es necesario crear este directorio ??


const JWT_SEED = envs.JWT_SEED; 
//const userServices:UserServices=new UserServices()


/**
 * Options: Le indicamos a passport como va a extraer el token jwt de las solicitudes y que clave usara para verificarlo
 **/ 

type Options={
    jwtFromRequest:JwtStrategy.JwtFromRequestFunction,
    secretOrKey:string
}
const options:Options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: JWT_SEED
}

/**
 * passport.use: Le decimos  a passport como se va a AUTENTICAR el usuario al acceder a una ruta protegida
*/

// passport.use(
//   new JwtStrategy.Strategy(options, (tokenDecoded:object, done:(error:Error|null,user:object|false)=>void) => {
//         userServices.findUserById(tokenDecoded.id)
//             .then((user) => {
//                 if(user){
//                     done(null, tokenDecoded) //? Caso Exitoso,el usuario si existe se verifico el token
//                 } else {
//                     done(null, false) //? Caso fallido, usuario no existe, no se verifico el token 
//                 }
//             })
//             .catch((err) => {
//                 done(err, false) //? Caso error, verificacion fallida
//             })
//     })
// )

export default passport
