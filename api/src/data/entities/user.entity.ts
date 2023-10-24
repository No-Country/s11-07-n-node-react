// enum UserRole {
//   ADMIN = 'ADMIN',
//   USER = 'USER',
//   WORKER = 'WORKER',
// }

export class UserEntity {
  constructor (
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public roles?: [string],
    public isActive?: boolean,
    public city?: string
  ) {}
}
