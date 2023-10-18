


// Template de base para entidad de usuario
export class UserEntity {

constructor(
    public first_name: string,
    public last_name: string,
    public email: string,
    public password: string,
    public city: string
) {}

}