const Assets = require('../models/assets.model');

const getAll = () => Assets.getAll();

const findByClientCode = (codCliente) => Assets.findByClientCode(codCliente);

module.exports = { getAll, findByClientCode };