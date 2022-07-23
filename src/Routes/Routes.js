const express = require('express');
const routes = express.Router();

const Clients = require('../controllers/clients.controller');
const Assets = require('../controllers/assets.controller');
const Transactions = require('../controllers/transactions.controller');

const { depositValidation, withdrawValidation } = require('../middlewares/transactions.validation');
const { validatePurchase } = require('../middlewares/purchase.validation')
const { validateSale } = require('../middlewares/sale.validation');
const { loginValidation, authGenerator } = require('../middlewares/login.validation');
const { authenticateToken } = require('../middlewares/token.validation');

routes.post('/login', loginValidation, authGenerator);
/**
 * @swagger
 *  /login:
 *      post:
 *        tags: [Login]
 *        description: Retorna token para usuários cadastrados
 *        requestBody:
 *            required: true
 *            content:
 *                application/json:
 *                    schema:
 *                        type: object
 *                        required: 
 *                            - email
 *                            - senha
 *                        properties:
 *                            email:
 *                                type: string
 *                            senha:
 *                                type: number
 *                        example:
 *                            email: robertosousa@gmail.com
 *                            senha: 485147
 *        responses:
 *            200:
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          required: 
 *                              - token
 *                          properties:
 *                              token:
 *                                  type: string
 *                          example:
 *                              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
 *                                      eyJub21lIjoiUm9iZXJ0byIsInNvYnJlbm9tZSI6IlNvdXNhIiwiZW1haWwiOiJyb2JlcnRvc291c2FAZ21haWwuY29tIiwiaWF0IjoxNjU4NTIxNTYwLCJleHAiOjE2NTkxMjYzNjB9.
 *                                      0tdUYr5wbV6Oo3jUGCmDGd-EO4ZYCGE1tH9d_-vjTEk"
 */


routes.get('/conta/:codCliente', authenticateToken, Clients.getClientByCode);
/**
 * @swagger
 *  /conta/{codCliente}:
 *      get:
 *        tags: [Clientes]
 *        description: Endpoint que retorna saldo de um usuário com busca por Código de Cliente
 *        security:
 *            - bearerAuth: []
 *        parameters:
 *            - in: path
 *              name: codCliente
 *              type: number
 *              required: true
 *        responses:
 *            200: 
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          required: 
 *                              - CodCliente
 *                              - Saldo
 *                          properties:
 *                              CodCliente:
 *                                  type: number
 *                              Saldo:
 *                                  type: string
 *                          example:
 *                              CodCliente: 1
 *                              Saldo: "1500.00"
 */

routes.post('/conta/deposito', authenticateToken, depositValidation, Clients.newDeposit);
/**
 * @swagger
 *  /conta/deposito:
 *      post:
 *        tags: [Clientes]
 *        description: Insere valor de depósito em saldo de cliente
 *        security:
 *            - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *                application/json:
 *                    schema:
 *                        type: object
 *                        required: 
 *                            - codCliente
 *                            - valor
 *                        properties:
 *                            codCliente:
 *                                type: number
 *                            valor:
 *                                type: number
 *                        example:
 *                            codCliente: 1
 *                            valor: 1000.00
 *        responses:
 *            200:
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          required: 
 *                              - message
 *                          properties:
 *                              token:
 *                                  type: string
 *                          example:
 *                              message: "Depósito realizado com sucesso! Saldo atual: R$ 2500.00"
 */

routes.post('/conta/saque', authenticateToken, withdrawValidation, Clients.newWithdraw);
/**
 * @swagger
 *  /conta/saque:
 *      post:
 *        tags: [Clientes]
 *        description: Subtrai valor de saque em saldo de cliente
 *        security:
 *            - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *                application/json:
 *                    schema:
 *                        type: object
 *                        required: 
 *                            - codCliente
 *                            - valor
 *                        properties:
 *                            codCliente:
 *                                type: number
 *                            valor:
 *                                type: number
 *                        example:
 *                            codCliente: 1,
 *                            valor: 1000
 *        responses:
 *            200:
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          required: 
 *                              - message
 *                          properties:
 *                              token:
 *                                  type: string
 *                          example:
 *                              message: "Saque realizado com sucesso! Saldo atual: R$ 2500.00"
 */


routes.get('/ativos', Assets.getAll);
/**
 * @swagger
 *  /ativos:
 *      get:
 *        tags: [Ativos]
 *        description: Endpoint que retorna todos os ativos disponíveis na plataforma
 *        security:
 *            - bearerAuth: []
 *        responses:
 *            200: 
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: array
 *                          items:
 *                              required: 
 *                                  - CodAtivo
 *                                  - Simbolo
 *                                  - NomeAtivo
 *                                  - Valor
 *                                  - QtdeAtivo
 *                              properties:
 *                                  CodAtivo:
 *                                      type: number
 *                                  Simbolo:
 *                                      type: string
 *                                  NomeAtivo:
 *                                      type: string
 *                                  Valor:
 *                                      type: string
 *                                  QtdeAtivo:
 *                                      type: number
 *                              example:
 *                                  CodAtivo: 1
 *                                  Simbolo: "ABEV3"
 *                                  NomeAtivo: "AMBEV ON"
 *                                  Valor: "14.59"
 *                                  QtdeAtivo: 30
 */

routes.get('/ativos/idCliente/:codCliente', authenticateToken, Assets.findByClientCode);
/**
 * @swagger
 *  /ativos/idCliente/{codCliente}:
 *      get:
 *        tags: [Ativos]
 *        description: Endpoint que retorna informações de todos os ativos investidos pelo cliente, com busca peloa código do cliente
 *        security:
 *            - bearerAuth: []
 *        parameters:
 *            - in: path
 *              name: codCliente
 *              type: number
 *              required: true
 *        responses:
 *            200: 
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: array
 *                          items:
 *                              required: 
 *                                  - codCliente
 *                                  - CodAtivo
 *                                  - QtdeAtivo
 *                                  - Valor
 *                              properties:
 *                                  codCliente:
 *                                      type: number
 *                                  CodAtivo:
 *                                      type: number
 *                                  QtdeAtivo:
 *                                      type: string
 *                                  Valor:
 *                                      type: string
 *                              example:
 *                                  codCliente: 1
 *                                  CodAtivo: 2
 *                                  QtdeAtivo: "1"
 *                                  Valor: "6.92"
 */

routes.get('/ativos/idAtivo/:codAtivo', authenticateToken, Assets.findByAssetCode);
/**
 * @swagger
 *  /ativos/idAtivo/{codAtivo}:
 *      get:
 *        tags: [Ativos]
 *        description: Endpoint que retorna informações de um ativo, com busca pelo código do ativo
 *        security:
 *            - bearerAuth: []
 *        parameters:
 *            - in: path
 *              name: codAtivo
 *              type: number
 *              required: true
 *        responses:
 *            200: 
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          required: 
 *                              - CodAtivo
 *                              - QtdeAtivo
 *                              - Valor:
 *                          properties:
 *                              CodAtivo:
 *                                  type: number
 *                              QtdeAtivo:
 *                                  type: number
 *                              Valor:
 *                                  type: string
 *                          example:
 *                              CodAtivo: 1
 *                              QtdeAtivo: 30
 *                              Valor: "14.49"

 */


routes.post('/investimentos/comprar', authenticateToken, validatePurchase, Transactions.insertPurchase);
/**
 * @swagger
 *  /investimentos/comprar:
 *      post:
 *        tags: [Investimentos]
 *        description: Insere nova entrada no registro de compra e atualiza quantidade de ativos da plataforma
 *        security:
 *            - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *                application/json:
 *                    schema:
 *                        type: object
 *                        required: 
 *                            - codCliente
 *                            - codAtivo
 *                            - qtdeAtivo
 *                        properties:
 *                            codCliente:
 *                                type: number
 *                            codAtivo:
 *                                type: number
 *                            qtdeAtivo:
 *                                type: number
 *                        example:
 *                            codCliente: 1
 *                            codAtivo: 2
 *                            qtdeAtivo: 5
 *        responses:
 *            200:
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          required: 
 *                              - message
 *                          properties:
 *                              token:
 *                                  type: string
 *                          example:
 *                              message: "Compra realizada com sucesso"
 */

routes.post('/investimentos/vender', authenticateToken, validateSale, Transactions.insertSale);
/**
 * @swagger
 *  /investimentos/vender:
 *      post:
 *        tags: [Investimentos]
 *        description: Insere nova entrada no registro de venda e atualiza quantidade de ativos da plataforma
 *        security:
 *            - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *                application/json:
 *                    schema:
 *                        type: object
 *                        required: 
 *                            - codCliente
 *                            - codAtivo
 *                            - qtdeAtivo
 *                        properties:
 *                            codCliente:
 *                                type: number
 *                            codAtivo:
 *                                type: number
 *                            qtdeAtivo:
 *                                type: number
 *                        example:
 *                            codCliente: 1
 *                            codAtivo: 2
 *                            qtdeAtivo: 5
 *        responses:
 *            200:
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          required: 
 *                              - message
 *                          properties:
 *                              token:
 *                                  type: string
 *                          example:
 *                              message: "Venda realizada com sucesso"
 */


routes.get('/transacoes/compra', authenticateToken, Transactions.getAllPurchases);
/**
 * @swagger
 *  /transacoes/compra:
 *      get:
 *        tags: [Transações]
 *        description: Endpoint que retorna todas as transações de compra da plataforma
 *        security:
 *            - bearerAuth: []
 *        responses:
 *            200: 
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: array
 *                          items:
 *                              required: 
 *                                  - IdCompra
 *                                  - CodCliente
 *                                  - CodAtivo
 *                                  - QtdeComprada
 *                              properties:
 *                                  IdCompra:
 *                                      type: number
 *                                  CodCliente:
 *                                      type: number
 *                                  CodAtivo:
 *                                      type: number
 *                                  QtdeVendida:
 *                                      type: number
 *                              example:
 *                                  IdCompra: 1
 *                                  CodCliente: 1
 *                                  CodAtivo: 2
 *                                  QtdeComprada: 5
 */

routes.get('/transacoes/venda', authenticateToken, Transactions.getAllSales);
/**
 * @swagger
 *  /transacoes/venda:
 *      get:
 *        tags: [Transações]
 *        description: Endpoint que retorna todas as transações de venda da plataforma
 *        security:
 *            - bearerAuth: []
 *        responses:
 *            200: 
 *                content:
 *                    application/json:
 *                        schema:
 *                          type: array
 *                          items:
 *                              required: 
 *                                  - IdVenda
 *                                  - CodCliente
 *                                  - CodAtivo
 *                                  - QtdeVendida
 *                              properties:
 *                                  IdVenda:
 *                                      type: number
 *                                  CodCliente:
 *                                      type: number
 *                                  CodAtivo:
 *                                      type: number
 *                                  QtdeVendida:
 *                                      type: number
 *                              example:
 *                                  IdVenda: 1
 *                                  CodCliente: 5 
 *                                  CodAtivo: 9
 *                                  QtdeVendida: 2
 */


module.exports = routes;