const Assets = require('../services/assets.service');

const getAll = async (_req, res) => {
  const allAssets = await Assets.getAll();
  if (!allAssets) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allAssets);
};

module.exports = { getAll };