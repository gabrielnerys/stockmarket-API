const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT * FROM StockMarketAPI.Clientes;`;
  const [allClients] = await connection.execute(query);
  return allClients;
}

const getClientByCode = async (codCliente) => {
  const query = `
  SELECT cod_cliente AS CodCliente,
  saldo AS Saldo
  FROM StockMarketAPI.Clientes
  WHERE cod_cliente = ?`;
  const [clientBycode] = await connection.execute(query, [codCliente]);
  return clientBycode[0];
};


module.exports = { getAll, getClientByCode };