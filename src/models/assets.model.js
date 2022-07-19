const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT * FROM StockMarketAPI.Clientes;`;
  const [allClients] = await connection.execute(query);
  return allClients;
}

module.exports = { getAll };