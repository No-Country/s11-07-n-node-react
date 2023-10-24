import swaggerJSDoc from 'swagger-jsdoc'

import { path } from 'node:path'
const swaggerSpec = {
  swaggerDefinition: {
    openapi: '3.0.0', // Especifica la versión de OpenAPI
    info: {
      title: 'Work Flow API',
      version: '1.0.0',
      description: 'Documentación de la API de Work Flow mongoDB'
    },
    servers: [
      { url: 'http://localhost:9000' }
    ]
  },
  apis: [`${path.join(__dirname, './src/routes/*.ts')}`] // Ruta de tus archivos de ruta
}

export const specs = swaggerJSDoc(swaggerSpec)
