const Assets = require('../models/assets.model');

const getAll = () => Assets.getAll();

module.exports = { getAll };