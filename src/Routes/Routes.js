const express = require('express');
const routes = express.Router();

const Clients = require('../controllers/clients.controller');
const Assets = require('../controllers/assets.controller');
const Transactions = require('../controllers/transactions.controller');

// routes.get('/conta/clientes', Clients.getAll);
routes.get('/conta/:codCliente', Clients.getClientByCode);
routes.post('/conta/deposito', Clients.newDeposit);
routes.post('/conta/saque', Clients.newWithdraw);

routes.get('/ativos', Assets.getAll);
routes.get('/ativos/idCliente/:codCliente', Assets.findByClientCode);
routes.get('/ativos/idAtivo/:codAtivo', Assets.findByAssetCode);

routes.post('/investimentos/comprar', Transactions.insertPurchase);
routes.post('/investimentos/vender', Transactions.insertSale);

module.exports = routes;