const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./src/docs/swagger.config')
// const swaggerDocument = require('./swagger.json')

app.use(express.json());

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/', require('./src/Routes/Routes'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app; 
