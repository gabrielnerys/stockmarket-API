const connection = require('./connection');

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

module.exports = { insertPurchase ,insertSale };