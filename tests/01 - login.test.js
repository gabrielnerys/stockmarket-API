const request = require("supertest");
const app = require("../app");
const { describe, it } = require('@jest/globals');

const emptyEmail = { email: "", senha : 485147 }
const invalidEmail = { email: "robertosougmail.com", senha : 485147 }
const notRegisteredEmail = { email: "robertonunes@gmail.com", senha : 485147 }
const emptyPassword = { email: "robertosousa@gmail.com", senha : "" }
const incorrectPassword = { email: "robertosousa@gmail.com", senha : 4857 }

const correctData = { email: "robertosousa@gmail.com", senha : 485147 }

describe('Validação de login e geração de token', () => {

  describe('Ao acessar a rota POST /login', () => {
    describe('com o campo "email" vazio', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send(emptyEmail)
        .expect(400, { message: `O campo 'email' não pode estar vazio.` })
      });
    });

    describe('com o campo "email" inválido', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send(invalidEmail)
        .expect(400, { message: `O 'email' precisa ser um email válido.` })
      });
    });

    describe('com o campo "email" inválido', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send(notRegisteredEmail)
        .expect(400, { message: `O 'email' informado não foi localizado` })
      });
    });

    describe('com o campo "senha" vazio', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send(emptyPassword)
        .expect(400, { message: `O campo 'senha' não pode estar vazio.` })
      });
    });

    describe('com o campo "senha" incorreto', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/login')
        .send(incorrectPassword)
        .expect(400, { message: `Senha inválida.` })
      });
    });

    describe('com o as informações corretas', () => {
      it('retorna status 200 ', async () => {
        await request(app)
        .post('/login')
        .send(correctData)
        .expect(200)
      });
    });
  });
});
