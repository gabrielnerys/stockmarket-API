const Clients = require('../models/clients.model');

const getAll = () => Clients.getAll();

module.exports = { getAll };