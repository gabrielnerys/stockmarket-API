const connection = require('./connection');

const getAll = async () => {
  const query = `
  SELECT c.cod_ativo AS CodAtivo, 
  Ativos.simbolo AS Simbolo,
  Ativos.nome_ativo AS NomeAtivo,
  c.soma - v.soma AS QtdeAtivo, 
  Ativos.valor_unit AS Valor
  FROM (
  SELECT SUM(Compra.qtde_comprada) AS soma, 
  Compra.cod_ativo, 
  Compra.cod_cliente FROM StockMarketAPI.Compra 
  GROUP BY Compra.cod_ativo, Compra.cod_cliente) AS c
  INNER JOIN (
  SELECT SUM(Venda.qtde_vendida) as soma, 
  Venda.cod_ativo, Venda.cod_cliente FROM StockMarketAPI.Venda 
  GROUP BY Venda.cod_ativo, Venda.cod_cliente) AS v
  ON (v.cod_ativo = c.cod_ativo AND v.cod_cliente = c.cod_cliente)
  INNER JOIN StockMarketAPI.Ativos ON (Ativos.cod_ativo = c.cod_ativo)
  ORDER BY c.cod_cliente;`;
  const [allAssets] = await connection.execute(query);
  return allAssets;
}

const findByClientCode = async (codCliente) => {
  const query2 = `
  SELECT c.cod_cliente AS CodCliente,
  c.cod_ativo AS CodAtivo, 
  c.soma - v.soma AS QtdeAtivo, 
  Ativos.valor_unit AS Valor
  FROM (
  SELECT SUM(Compra.qtde_comprada) AS soma, 
  Compra.cod_ativo, 
  Compra.cod_cliente FROM StockMarketAPI.Compra 
  GROUP BY Compra.cod_ativo, Compra.cod_cliente) AS c
  INNER JOIN (
  SELECT SUM(Venda.qtde_vendida) as soma, 
  Venda.cod_ativo, Venda.cod_cliente FROM StockMarketAPI.Venda 
  GROUP BY Venda.cod_ativo, Venda.cod_cliente) AS v
  ON (v.cod_ativo = c.cod_ativo AND v.cod_cliente = c.cod_cliente)
  INNER JOIN StockMarketAPI.Ativos ON (Ativos.cod_ativo = c.cod_ativo)
  WHERE c.cod_cliente = ?
  ORDER BY c.cod_cliente;`;
  const [request] = await connection.execute(query2, [codCliente]);
  return request;
};

const findByAssetCode = async (codAtivo) => {
  const query = `
  SELECT cod_ativo AS CodAtivo, qtde_ativo AS QtdeAtivo, valor_unit AS Valor
  FROM StockMarketAPI.Ativos WHERE cod_ativo = ?`;
  const [request] = await connection.execute(query, [codAtivo]);
  return request[0];
};


module.exports = { getAll, findByClientCode, findByAssetCode };