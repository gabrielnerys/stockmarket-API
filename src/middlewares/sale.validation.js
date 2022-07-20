const Assets = require('../services/assets.service');

const validateSale = async (req, res, next) => {
  const { codCliente, codAtivo, qtdeAtivo } = req.body;
  const getClientByCode = await Assets.findByClientCode(codCliente);
  const [filteredAsset] = getClientByCode.filter(({CodAtivo}) => CodAtivo === codAtivo);

  if (!codCliente) return res.status(400).json({ message: `O campo 'codCliente' não pode estar vazio.`});
  if (!codAtivo) return res.status(400).json({ message: `O campo 'codAtivo' não pode estar vazio.`});
  if (!qtdeAtivo) return res.status(400).json({ message: `O campo 'qtdeAtivo' não pode estar vazio.`});
  if (!filteredAsset) return res.status(404).json({ message: `O cliente não possui ativos de código ${codAtivo} disponíveis para venda.`});

  if(qtdeAtivo > filteredAsset.qtdeAtivo) {
    return res.status(400).json({ message: `Quantidade solicitada para venda é maior que a quantidade disponivel.`});
  }
  next();
}

module.exports = { validateSale };