// const Assets = require('../services/clients.service');

// const getAll = async (_req, res) => {
//   const allAssets = await Assets.getAll();
//   if (!allAssets) return res.status(500).json({ message: 'Não foi possível completar sua solicitação' });
//   return res.status(200).json(allAssets);
// };

// const findByClientCode = async (req, res) => {
//   const { codCliente } = req.params
//   const clientByCode = await Assets.findByClientCode(codCliente);
//   if (!clientByCode) return res.status(500).json({ message: 'Cliente não encontrado' });
//   return res.status(200).json(clientByCode);
// };

// module.exports = { getAll, findByClientCode };