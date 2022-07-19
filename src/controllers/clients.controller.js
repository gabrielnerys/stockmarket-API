const Clients = require('../services/clients.service');

const getAll = async (_req, res) => {
  const allUsers = await Clients.getAll();
  if (!allUsers) return res.status(500).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allUsers);
};

module.exports = { getAll };