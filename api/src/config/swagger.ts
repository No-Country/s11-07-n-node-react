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
    servers: [
      { url: 'http://localhost:3000/api/v1' }
    ]
  },
  apis: ['./src/routes/*.ts', './src/routes/**/*.ts', './src/routes/**/**/*.ts'
  ]
  // apis: [`${path.join(__dirname, 'src/routes/*.ts')}`
  // ]
}

const specs = swaggerJSDoc(swaggerSpec)

export default specs
