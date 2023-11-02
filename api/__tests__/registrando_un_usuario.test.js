"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../src/routes/user/user.route");
const USER_PATH = '/api/v1/users';
const USER_DATA = {
    email: 'emanuelgauler@mi-ksa.desaparecida',
    nombre: 'Emanuel',
    apellido: 'Gauler',
    ciudad: 'Eldorado-Misiones-Argentina',
    contraseña: 'qwerty235'
};
const app = (0, express_1.default)();
app.use(express_1.default.json());
const user_router = user_route_1.UserRoute.routes;
app.use('/api/v1', user_router);
describe('POST /api/v1/users, registrando un usuario', function () {
    it('cuando el email del usuario no está registrado', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .post(USER_PATH)
            .send(USER_DATA);
        expect(response.statusCode).toEqual(201);
        expect(response.body.mensaje)
            .toEqual(`Se registró exitosamente con el email ${USER_DATA.email}.`);
    }));
    it('cuando el usuario existe en el sistema', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app)
                .post(USER_PATH)
                .send(USER_DATA);
            expect(response.statusCode).toEqual(400);
            expect(response.body.mensaje)
                .toEqual(`No fué posible registrase con el email suministrado. Contáctese con la administración.`);
        });
    });
    /*
    */
});
