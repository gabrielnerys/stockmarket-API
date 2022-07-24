const request = require("supertest");
const app = require("../app");
const { describe, it } = require('@jest/globals');

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiUm9iZXJ0byIsInNvYnJlbm9tZSI6IlNvdXNhIiwiZW1haWwiOiJyb2JlcnRvc291c2FAZ21haWwuY29tIiwiaWF0IjoxNjU4Njg4NjUwLCJleHAiOjE2NTkyOTM0NTB9.dioInAMc6_nx_JMBqbRrV4sX1wlKPBTdCE_YMNeqVoE"
const cliente = 1

describe('Validação de rotas /conta/:', () => {

  describe('Ao acessar a rota POST /conta/:codCliente', () => {
    describe('com o Codigo de cliente inválido', () => {
      it('retorna status 404 ', async () => {
        await request(app)
        .get('/conta/:codCliente')
        .set({ Authorization: token })
        .query({ codCliente: cliente })
        .expect(404, { message: 'Cliente não encontrado' })
      });
    });
  });

  describe('Ao acessar a rota POST /conta/deposito', () => {
    describe('com o campo "valor" vazio', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/conta/deposito')
        .set({ Authorization: token })
        .send({ codCliente: 1, valor: ""})
        .expect(400, { message: `O campo 'valor' não pode estar vazio.`})
      });
    });

    describe('com o valor menor ou igual a 0', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/conta/deposito')
        .set({ Authorization: token })
        .send({ codCliente: 1, valor: -1 })
        .expect(400, { message: `O valor de depósito não pode ser menor ou igual a zero.`})
      });
    });

    describe('com código de cliente e valor válidos', () => {
      it('retorna status 200 ', async () => {
        await request(app)
        .post('/conta/deposito')
        .set({ Authorization: token })
        .send({ codCliente: 1, valor: 1000.00})
        .expect(200)
      });
    });
  });

  describe('Ao acessar a rota POST /conta/saque', () => {
    describe('com o campo "codCliente" vazio', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/conta/saque')
        .set({ Authorization: token })
        .send({ codCliente: "", valor: 1000.00})
        .expect(400, { message: `O campo 'codCliente' não pode estar vazio.`})
      });
    });

    describe('com o código de cliente inválido', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/conta/saque')
        .set({ Authorization: token })
        .send({ codCliente: 12, valor: 1000.00 })
        .expect(400, { message: 'Cliente de código 12 não encontrado.'})
      });
    });

    describe('com o campo "valor" vazio', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/conta/saque')
        .set({ Authorization: token })
        .send({ codCliente: 1, valor: ""})
        .expect(400, { message: `O campo 'valor' não pode estar vazio.`})
      });
    });

    describe('com o valor de saque acima do valor em saldo', () => {
      it('retorna status 400 ', async () => {
        await request(app)
        .post('/conta/saque')
        .set({ Authorization: token })
        .send({ codCliente: 1, valor: 5000.00})
        .expect(400, { message: 'Valor disponivel para saque é inferior a quantidade solicitada.' })
      });
    });
  });
});
