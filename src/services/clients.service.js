const Clients = require('../models/clients.model');

const getAll = () => Clients.getAll();

const getClientByCode = (codCliente) => Clients.getClientByCode(codCliente);

const newDeposit = (codCliente, valor) => Clients.newDeposit(codCliente, valor);

const newWithdraw = (codCliente, valor) => Clients.newWithdraw(codCliente, valor);

module.exports = { getAll, getClientByCode, newDeposit, newWithdraw };