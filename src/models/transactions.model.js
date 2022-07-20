const connection = require('./connection');

const insertSale = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = `INSERT INTO StockMarketAPI.Venda (cod_cliente, cod_ativo, qtde_vendida) values (?, ? ,?)`;
  const newSale = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);
  return newSale;
}

module.exports = { insertSale };