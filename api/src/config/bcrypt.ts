import { compareSync, hashSync } from 'bcryptjs';



export class BcryptAdapter {

    static hash(password:string): string {
        return hashSync(password)
    }

    static matchPassword( password: string, hashed: string ): boolean{

        return compareSync(password, hashed)
    }
}