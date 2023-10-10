


// Template de base para entidad de usuario
export class UserEntity {

constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public roles?: string[],
    public imgUrl?: string
) {}

}