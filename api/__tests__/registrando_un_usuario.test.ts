import request from 'supertest'
import express, { Application } from 'express'
import { UserRoute } from '../src/routes/user/user.route';

const USER_PATH = '/api/v1/users'
const USER_DATA = {
   email: 'emanuelgauler@mi-ksa.desaparecida'
   , nombre: 'Emanuel'
   , apellido: 'Gauler'
   , ciudad: 'Eldorado-Misiones-Argentina'
   , contraseña: 'qwerty235'
}
const app: Application = express();
app.use( express.json() );

const user_router = UserRoute.routes();

app.use('/api/v1', user_router)

describe('POST /api/v1/users, registrando un usuario', function () {
   it('cuando el email del usuario no está registrado',async () => {
      const response = await request(app)
         .post(USER_PATH)
         .send(USER_DATA);

      expect( response.statusCode ).toEqual( 201 );
      expect(response.body.mensaje)
         .toEqual(`Se registró exitosamente con el email ${USER_DATA.email}.`)
   })

   /*
   it('cuando el usuario existe en el sistema', async function() {
      const response = await request(app)
         .post(USER_PATH)
         .send(USER_DATA)

      expect( response.statusCode ).toEqual( 400 );
      expect( response.body ).toHaveProperty( 'mensaje' );
      expect( response.body.mensaje ).toEqual( 'No fué posible registrar el email ingresado. Contáctese a administración' )
   })
   */
});
