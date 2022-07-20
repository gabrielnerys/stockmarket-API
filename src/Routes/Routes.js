const express = require('express');
const routes = express.Router();

const Clients = require('../controllers/clients.controller');
const Assets = require('../controllers/assets.controller');
const Transactions = require('../controllers/transactions.controller');

const { validatePurchase } = require('../middlewares/purchase.validation')
const { validateSale } = require('../middlewares/sale.validation');

// routes.get('/conta/clientes', Clients.getAll);
routes.get('/conta/:codCliente', Clients.getClientByCode);
routes.post('/conta/deposito', Clients.newDeposit);
routes.post('/conta/saque', Clients.newWithdraw);

routes.get('/ativos', Assets.getAll);
routes.get('/ativos/idCliente/:codCliente', Assets.findByClientCode);
routes.get('/ativos/idAtivo/:codAtivo', Assets.findByAssetCode);

routes.post('/investimentos/comprar', validatePurchase, Transactions.insertPurchase);
routes.post('/investimentos/vender', validateSale, Transactions.insertSale);

routes.get('/transacoes/compra', Transactions.getAllPurchases);
routes.get('/transacoes/venda', Transactions.getAllSales);

module.exports = routes;