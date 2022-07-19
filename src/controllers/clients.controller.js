const Clients = require('../services/clients.service');

const getAll = async (_req, res) => {
  const allUsers = await Clients.getAll();
  if (!allUsers) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allUsers);
};

const getClientByCode = async (req, res) => {
  const { codCliente } = req.params
  const clientByCode = await Clients.getClientByCode(codCliente);
  if (!clientByCode) return res.status(404).json({ message: 'Cliente não encontrado' });
  return res.status(200).json(clientByCode);
};

const newDeposit = async (req, res) => {
  const { codCliente, valor } = req.body;
  const deposit = await Clients.newDeposit(codCliente, valor);
  if (!deposit) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json({ message: 'Deposito realizado com sucesso' });
}

module.exports = { getAll, getClientByCode, newDeposit };