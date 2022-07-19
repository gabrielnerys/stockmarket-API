const express = require('express');
const routes = express.Router();

const Clients = require('../controllers/clients.controller');

routes.get('/conta/clientes', Clients.getAll);
routes.get('/conta/:codCliente', Clients.getClientByCode);
routes.post('/conta/deposito', Clients.newDeposit);
routes.post('/conta/saque', Clients.newWithdraw);

module.exports = routes;