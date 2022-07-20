const Clients = require('../services/clients.service');
const tokenGenerator = require('../../utils/tokenGenerator');

const loginValidation = async (req, res, next) => {
  const { email, senha } = req.body;
  const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;

  if (!email) return res.status(400).json({ message: `O campo 'email' não pode estar vazio.`});
  if (!senha) return res.status(400).json({ message: `O campo 'senha' não pode estar vazio.`});
  if (!regexEmail.test(email)) return res.status(400).json({ message: `O email precisa ser um email válido.`});
  if (senha.lenght < 6) return res.status(400).json({ message: `O campo senha deve ter pelo menos seis caracteres.`});

  const getClients = await Clients.getAll();
  const [validEmail] = getClients.filter((a) => a.email === email);

  if (!validEmail) return res.status(400).json({ message: `O email informado não foi localizado`});
  if (validEmail.senha !== senha) return res.status(200).json({ message: `Senha inválida.`});

  next();
}

const authGenerator = async (req, res) => {
  const { email } = req.body;

  const getClients = await Clients.getAll();
  const [validEmail] = getClients.filter((a) => a.email === email);

  if (!validEmail) return res.status(400).json({ message: `O email informado não foi localizado`});

  const token = tokenGenerator(validEmail);
  return res.status(200).json({ token });
}; 

module.exports = { loginValidation, authGenerator };