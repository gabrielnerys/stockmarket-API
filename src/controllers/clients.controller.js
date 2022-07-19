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
  const { Saldo } = await Clients.getClientByCode(codCliente); 
  if (!deposit) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json({ message: `Saque realizado com sucesso! Saldo atual: R$ ${Saldo}` });
}

const newWithdraw = async (req, res) => {
  const { codCliente, valor } = req.body;
  const withdraw = await Clients.newWithdraw(codCliente, valor);
  const { Saldo } = await Clients.getClientByCode(codCliente); 
  if (!withdraw) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json({ message: `Saque realizado com sucesso! Saldo atual: R$ ${Saldo}` });
}

module.exports = { getAll, getClientByCode, newDeposit, newWithdraw };