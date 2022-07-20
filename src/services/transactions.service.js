const Transactions = require('../models/transactions.model');

const insertPurchase = (codCliente, codAtivo, qtdeAtivo) => Transactions.insertPurchase(codCliente, codAtivo, qtdeAtivo);

const insertSale = (codCliente, codAtivo, qtdeAtivo) => Transactions.insertSale(codCliente, codAtivo, qtdeAtivo);

module.exports = { insertPurchase, insertSale };