const Assets = require('../services/assets.service');

const getAll = async (_req, res) => {
  const allAssets = await Assets.getAll();
  if (!allAssets) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allAssets);
};

const findByClientCode = async (req, res) => {
  const { codCliente } = req.params
  const clientByCode = await Assets.findByClientCode(codCliente);
  if (!clientByCode) return res.status(404).json({ message: 'Cliente não encontrado' });
  return res.status(200).json(clientByCode);
};

const findByAssetCode = async (req, res) => {
  const { codAtivo } = req.params;
  const request = await Assets.findByAssetCode(codAtivo);
  if (!request) return res.status(500).json({ message: 'Deu ruim' });
  return res.status(200).json(request);
};

module.exports = { getAll, findByClientCode, findByAssetCode };