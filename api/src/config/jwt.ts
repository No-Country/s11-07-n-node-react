
import jwt from 'jsonwebtoken'
import { envs } from './envs.config';
const JWT_SEED = envs.JWT_SEED;


export class JwtAdapter {

    static async generateToken( payload: Object, duration: '1h'): Promise<string | null> {

        return new Promise((resolve,reject) =>{

            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
                if( err ) return reject(err);
                resolve( token! );
            })
        })
    }


    static validatedToken<T>( token: string): Promise<T | null> {

        return new Promise((resolve,reject) => {

            jwt.verify(token, JWT_SEED, (err, decoded) => {

                if( err ) return reject(err);
                resolve(decoded as T)


            })
        })
    }
}