import request from 'supertest'
import express, { Application, Request, Response } from 'express'
import Router from 'express'
const app: Application = express();

const rootRoute = Router();

rootRoute.get( '/', function( req: Request, res: Response ): void {
   res.json( { message: 'Allo! Catch-all route' } )
});

//app.use( '/', rootRoute);

describe('Test app.ts', () => {
   test("Catch-all route", async () => {
      const response = await request(rootRoute).get('/');
      expect(response.body).toEqual({
	 message: 'Allo! Catch-all route'
      });
   });
});
