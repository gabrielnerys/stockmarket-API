const Clients = require('../services/clients.service');

const depositValidation = async (req, res, next) => {
  const { valor } = req.body;

  if (!valor) return res.status(400).json({ message: `O campo 'valor' não pode estar vazio.`});
  if (valor <= 0) return res.status(400).json({ message: `O valor de depósito não pode ser menor ou igual a zero.`});

  next();
}

const withdrawValidation = async (req, res, next) => {
  const { codCliente, valor } = req.body;

  const getClientByCode = await Clients.getClientByCode(codCliente);

  if (!codCliente) return res.status(400).json({ message: `O campo 'codCliente' não pode estar vazio.`});
  if (!valor) return res.status(400).json({ message: `O campo 'valor' não pode estar vazio.`});
  if (!getClientByCode) return res.status(400).json({ message: `Cliente de código ${codCliente} não encontrado.`});

  if (valor > getClientByCode.Saldo) return res.status(400)
    .json({ message: `Valor disponivel para saque é inferior a quantidade solicitada.`})

  next();
}

module.exports = { depositValidation, withdrawValidation };
