const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT * FROM StockMarketAPI.Clientes;`;
  const [allClients] = await connection.execute(query);
  return allClients;
}

const findByClientCode = async (codCliente) => {
  const query = `
  SELECT c.cod_cliente AS CodCliente,
  c.cod_ativo AS CodAtivo, 
  ROUND(SUM(c.qtde_comprada)/2) - ROUND(SUM(v.qtde_vendida)/2) AS qtdeAtivo,
  a.valor_unit AS Valor
  FROM StockMarketAPI.Compra AS c
  INNER JOIN StockMarketAPI.Venda AS v ON c.cod_cliente = v.cod_cliente
  INNER JOIN StockMarketAPI.Ativos AS a ON a.cod_ativo = c.cod_ativo
  WHERE c.cod_cliente = ?
  GROUP BY c.cod_cliente, c.cod_ativo;`;
  const [request] = await connection.execute(query, [codCliente]);
  return request;
};


module.exports = { getAll, findByClientCode };