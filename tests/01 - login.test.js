const request = require("supertest");
const app = require("../app");
const { describe, it } = require('@jest/globals');

describe('Validação de login e geração de token:', () => {

  describe('Ao acessar a rota POST /login', () => {
    describe('com o campo email vazio', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send({ email: "", senha: 485147})
        .expect(400, { message: "O campo 'email' não pode estar vazio." })
      });
    });

    describe('com email incorreto', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send({ email: "robertosougmail.com", senha: 485147})
        .expect(400, { message: "O 'email' precisa ser um email válido." })
      });
    });

    describe('com email não cadastrado', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send({ email: "robertonunes@gmail.com", senha: 485147})
        .expect(400, { message: "O 'email' informado não foi localizado" })
      });
    });

    describe('com o campo senha vazio', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send({ email: "robertosousa@gmail.com", senha: ""})
        .expect(400, { message: "O campo 'senha' não pode estar vazio." })
      });
    });

    describe('com senha incorreta', () => {
      it('retorna status 400 e mensagem "Senha inválida."', async () => {
        await request(app)
        .post('/login')
        .send({ email: "robertosousa@gmail.com", senha: "15486" })
        .expect(400, { message: "Senha inválida." })
      });
    });

    describe('com email e senha corretos', () => {
      it('retorna status 200', async () => {
        await request(app)
        .post('/login')
        .send({ email: "robertosousa@gmail.com", senha: 485147 })
        .expect(200);
      });
    });
  });
});
