import jwt from 'jsonwebtoken'
import { envs } from './envs.config'
import { Types } from 'mongoose'

const JWT_SEED = envs.JWT_SEED
const JWT_EXPIRE = envs.JWT_EXPIRE

export interface Payload {
  id: Types.ObjectId
  email: string
  roles: string[]
};

export class JwtAdapter {
  static async generateToken (payload: Payload, duration: typeof JWT_EXPIRE): Promise<string | null> {
    return await new Promise((resolve) => {
      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
        if (err) { resolve(null); return }

        resolve(token!)
      })
    })
  }

  static async validatedToken<T>(token: string): Promise<T | null> {
    return await new Promise((resolve) => {
      jwt.verify(token, JWT_SEED, (err, decoded) => {
        if (err) { resolve(null); return }

        resolve(decoded as T)
      })
    })
  }
}
