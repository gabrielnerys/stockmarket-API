const Transactions = require('../services/transactions.service');

const getAllPurchases = async (_req, res) => {
  const allPurchases = await Transactions.getAllPurchases();
  if (!allPurchases) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allPurchases);
};

const getAllSales = async (_req, res) => {
  const allSales = await Transactions.getAllSales();
  if (!allSales) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allSales);
};

const insertPurchase = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const newPurchase = await Transactions.insertPurchase(codCliente, codAtivo, qtdeAtivo);
  if(!newPurchase) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json({ message: 'Compra realizada com sucesso' });
}

const insertSale = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const newSale = await Transactions.insertSale(codCliente, codAtivo, qtdeAtivo);
  if(!newSale) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json({ message: 'Venda realizada com sucesso' });
}

module.exports = { getAllSales, getAllPurchases, insertPurchase, insertSale };