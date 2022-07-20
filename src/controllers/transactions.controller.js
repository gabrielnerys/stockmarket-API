const Transactions = require('../services/transactions.services');

const insertSale = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const newSale = await Transactions.insertSale(codCliente, codAtivo, qtdeAtivo);
  if(!newSale) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json({ message: 'Venda realizada com sucesso' });
}

module.exports = { insertSale };