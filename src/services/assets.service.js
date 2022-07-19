const Assets = require('../models/assets.model');

const getAll = () => Assets.getAll();

const findByClientCode = (codCliente) => Assets.findByClientCode(codCliente);

const findByAssetCode = (codAtivo) => Assets.findByAssetCode(codAtivo);

module.exports = { getAll, findByClientCode, findByAssetCode };