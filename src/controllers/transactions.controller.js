const Transactions = require('../services/transactions.services')

const insertSale = async (req, res) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const newSale = await Transactions.insertSale(codCliente, codAtivo, qtdeAtivo)
  if(!newSale) return res.status(500).json({ message: 'Erro' });
  return res.status(200).json({ message: 'Venda realizada com sucesso' });
}

module.exports = { insertSale } 