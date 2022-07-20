const connection = require('./connection');

const getAllPurchases = async () => {
  const query = `SELECT * FROM StockMarketAPI.Compra;`;
  const [allPurchases] = await connection.execute(query);
  return allPurchases;
}

const getAllSales = async () => {
  const query = `SELECT * FROM StockMarketAPI.Venda;`;
  const [allSales] = await connection.execute(query);
  return allSales;
}

const insertPurchase = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = `INSERT INTO StockMarketAPI.Compra (cod_cliente, cod_ativo, qtde_comprada) values (?, ? ,?)`;
  const newSale = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);
  return newSale;
}

const insertSale = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = `INSERT INTO StockMarketAPI.Venda (cod_cliente, cod_ativo, qtde_vendida) values (?, ? ,?)`;
  const newSale = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);
  return newSale;
}

module.exports = { getAllSales, getAllPurchases, insertPurchase, insertSale };