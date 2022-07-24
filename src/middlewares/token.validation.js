const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const [, auth] = token.split(' ');

  try {
    jwt.verify(auth, SECRET, jwtConfig);
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }

  next();
};

module.exports = { authenticateToken };