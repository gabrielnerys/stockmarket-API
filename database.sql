DROP DATABASE IF EXISTS StockMarketAPI;
CREATE DATABASE StockMarketAPI;
USE StockMarketAPI;

CREATE TABLE Clientes (
  cod_cliente       INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  nome		  		    VARCHAR(100) NOT NULL,
  sobrenome         VARCHAR(100) NOT NULL,
  email		          VARCHAR(100) NOT NULL,
  senha		          INT NOT NULL,
  saldo             DECIMAL(6,2) NOT NULL
) engine = InnoDB;

CREATE TABLE Ativos (
  cod_ativo         INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  simbolo           VARCHAR(100) NOT NULL,
  nome_ativo        VARCHAR(100) NOT NULL,
  valor_unit    	  DECIMAL(5,2) NOT NULL,
  qtde_ativo        INT NOT NULL

) engine = InnoDB;

CREATE TABLE Compra (
  id_compra			    INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  cod_cliente       INT NOT NULL,
  cod_ativo         INT NOT NULL,
  qtde_comprada     INT NOT NULL,
  
  FOREIGN KEY (cod_cliente) REFERENCES Clientes(cod_cliente),
  FOREIGN KEY (cod_ativo) REFERENCES Ativos(cod_ativo)
) engine = InnoDB;

CREATE TABLE Venda (
  id_venda			    INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  cod_cliente       INT NOT NULL,
  cod_ativo         INT NOT NULL,
  qtde_vendida      INT NOT NULL,
  
  FOREIGN KEY (cod_cliente) REFERENCES Clientes(cod_cliente),
  FOREIGN KEY (cod_ativo) REFERENCES Ativos(cod_ativo)
) engine = InnoDB;

INSERT INTO Clientes (nome, sobrenome, email, senha, saldo) 
VALUES
('Roberto', 'Sousa', 'robertosousa@gmail.com', 485147,1500),
('Luiza', 'Passos', 'luizapassos@outlook.com', 488236,3000),
('Pedro', 'Santos', 'pedrosantos@live.com', 784852,3000),
('Sabrina', 'Nunes', 'sabrinanunes@gmail.com', 184842,2000),
('Felipe', 'Cunha', 'felipecunha@yahoo.com', 215487,4000);

INSERT INTO Ativos (simbolo, nome_ativo, valor_unit, qtde_ativo)
VALUES
('ABEV3', 'AMBEV ON', 14.59, 30),
('CPLE6', 'COPEL PNB', 6.92, 30),
('ELET3', 'ELETROBRAS ON', 44.05, 30),
('EMBR3', 'EMBRAER ON', 11.16, 30),
('GGBR4', 'GERDAU PN', 23.54, 30),
('GOLL4', 'GOL PN', 8.03, 30),
('PETR3', 'PETROBRAS ON', 30.31, 30),
('PSSA3', 'PORTO SEGURO ON', 17.58, 30),
('TOTS3', 'TOTVS ON', 23.26, 30),
('FRIO3', 'METALFRIO ON', 41.50, 30);

INSERT INTO Compra (cod_cliente, cod_ativo, qtde_comprada) 
VALUES
(1, 2, 5),
(1, 4, 7),
(2, 6, 3),
(2, 8, 6),
(3, 10, 2),
(3, 1, 8),
(4, 3, 4),
(4, 5, 6),
(5, 7, 6),
(5, 9, 2);

INSERT INTO Venda(cod_cliente, cod_ativo, qtde_vendida)
VALUES
(5, 9, 1),
(2, 8, 3),
(3, 1, 3),
(1, 2, 4),
(4, 5, 2),
(4, 3, 2),
(5, 7, 4),
(3, 10, 1),
(2, 6, 2),
(1, 4, 3);