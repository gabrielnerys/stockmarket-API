const Clients = require('../models/clients.model');

const getAll = () => Clients.getAll();

const getClientByCode = (codCliente) => Clients.getClientByCode(codCliente);

module.exports = { getAll, getClientByCode };