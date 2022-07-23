
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "StockMarket API",
      description: "Documentação de API de Mercado de ações com Swagger",
      version: "1.0"
    },
    servers: [{
      url: "https://localhost:3000",
      description: "Local Server"
    },
    {
      url: "https://apistockmarkets.herokuapp.com",
      description: "Api Server"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["./src/Routes/Routes.js"]
};

module.exports = swaggerOptions;