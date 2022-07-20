const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenGenerator = ({ nome, sobrenome, email }) => {
  const key = jwt.sign({ nome, sobrenome, email }, SECRET, jwtConfig);
  return key;
};

module.exports = tokenGenerator;