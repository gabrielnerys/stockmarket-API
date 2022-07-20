const Transactions = require('../models/transactions.model')

const insertSale = (codCliente, codAtivo, qtdeAtivo) => Transactions.insertSale(codCliente, codAtivo, qtdeAtivo);

module.exports = { insertSale }