const express = require('express');
const routes = express.Router();

const Clients = require('../controllers/clients.controller');

routes.get('/conta/clientes', Clients.getAll);

module.exports = routes;