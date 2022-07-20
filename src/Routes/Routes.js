const express = require('express');
const routes = express.Router();

const Clients = require('../controllers/clients.controller');
const Assets = require('../controllers/assets.controller');
const Transactions = require('../controllers/transactions.controller');

const { depositValidation, withdrawValidation } = require('../middlewares/transactions.validation');
const { validatePurchase } = require('../middlewares/purchase.validation')
const { validateSale } = require('../middlewares/sale.validation');
const { loginValidation, authGenerator } = require('../middlewares/login.validation');
const { authenticateToken } = require('../middlewares/token.validation');

routes.post('/login', loginValidation, authGenerator)

// routes.get('/conta/clientes', authenticateToken, Clients.getAll);
routes.get('/conta/:codCliente', authenticateToken, Clients.getClientByCode);
routes.post('/conta/deposito', authenticateToken, depositValidation, Clients.newDeposit);
routes.post('/conta/saque', authenticateToken, withdrawValidation, Clients.newWithdraw);

routes.get('/ativos', Assets.getAll);
routes.get('/ativos/idCliente/:codCliente', authenticateToken, Assets.findByClientCode);
routes.get('/ativos/idAtivo/:codAtivo', authenticateToken, Assets.findByAssetCode);

routes.post('/investimentos/comprar', authenticateToken, validatePurchase, Transactions.insertPurchase);
routes.post('/investimentos/vender', authenticateToken, validateSale, Transactions.insertSale);

routes.get('/transacoes/compra', authenticateToken, Transactions.getAllPurchases);
routes.get('/transacoes/venda', authenticateToken, Transactions.getAllSales);

module.exports = routes;