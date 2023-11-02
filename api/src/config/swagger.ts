import swaggerJSDoc from 'swagger-jsdoc'
// import * as path from 'path'

const swaggerSpec = {
  swaggerDefinition: {
    openapi: '3.0.0', // Especifica la versión de OpenAPI
    info: {
      title: 'Work Flow API',
      version: '1.0.0',
      description: 'Documentación de la API de Work Flow mongoDB'
    },

    components: {
      securitySchemes: {
        BearerAuth: { // Usar el mismo nombre que en security
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },

    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor de desarrollo'
      },
      {
        url: 'https://work-flow-mongodb.herokuapp.com/api/v1',
        description: 'Servidor de producción'
      }
    ],
    security: [
      {
        BearerAuth: [] // Nombre de la definición de seguridad
      }
    ]
  },
  apis: ['./src/routes/*.ts', './src/routes/**/*.ts', './src/routes/**/**/*.ts'
  ]

}

const specs = swaggerJSDoc(swaggerSpec)

export default specs
