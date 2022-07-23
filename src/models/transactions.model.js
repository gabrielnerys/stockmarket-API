const connection = require('./connection');

const getAllPurchases = async () => {
  const query = `
  SELECT id_compra AS IdCompra,
  cod_cliente AS CodCliente,
  cod_ativo AS CodAtivo,
  qtde_comprada AS QtdeComprada
  FROM StockMarketAPI.Compra;`;
  const [allPurchases] = await connection.execute(query);
  return allPurchases;
}

const getAllSales = async () => {
  const query = `
  SELECT id_venda AS IdVenda,
  cod_cliente AS CodCliente,
  cod_ativo AS CodAtivo,
  qtde_vendida AS QtdeVendida
  FROM StockMarketAPI.Venda;`;
  const [allSales] = await connection.execute(query);
  return allSales;
}

const insertPurchase = async (codCliente, codAtivo, qtdeAtivo) => {
  const queryInsert = `INSERT INTO StockMarketAPI.Compra (cod_cliente, cod_ativo, qtde_comprada) values (?, ? ,?)`;
  const queryUpdate = `
  UPDATE StockMarketAPI.Ativos
  SET qtde_ativo = qtde_ativo - ?
  WHERE cod_ativo = ?;`
  const newPurchase = await connection.execute(queryInsert, [codCliente, codAtivo, qtdeAtivo]);
  await connection.execute(queryUpdate, [qtdeAtivo, codAtivo]);
  return newPurchase;
}

const insertSale = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = `INSERT INTO StockMarketAPI.Venda (cod_cliente, cod_ativo, qtde_vendida) values (?, ? ,?)`;
  const newSale = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);
  return newSale;
}

module.exports = { getAllSales, getAllPurchases, insertPurchase, insertSale };