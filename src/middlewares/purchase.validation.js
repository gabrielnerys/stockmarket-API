const Assets = require('../services/assets.service');

const validatePurchase = async (req, res, next) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const getAssetByCode = await Assets.findByAssetCode(codAtivo);

  if (!codCliente) return res.status(400).json({ message: `O campo 'codCliente' não pode estar vazio.`});
  if (!codAtivo) return res.status(400).json({ message: `O campo 'codAtivo' não pode estar vazio.`});
  if (!qtdeAtivo) return res.status(400).json({ message: `O campo 'qtdeAtivo' não pode estar vazio.`});
  if (!getAssetByCode) return res.status(404).json({ message: `O ativo de código ${codAtivo} não foi encontrado.`});

  if(qtdeAtivo > getAssetByCode.qtdeAtivo) {
    return res.status(400).json({ message: `Quantidade solicitada para compra é maior que a quantidade disponivel.`})
  }

  next();
}

module.exports = { validatePurchase };