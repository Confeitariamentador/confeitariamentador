CREATE DATABASE Confeitaria;
USE Confeitaria;



CREATE TABLE comprador (
	id	INT	PRIMARY KEY AUTO_INCREMENT,
    nome varchar(100),
    email	VARCHAR(50),
    senha	VARCHAR(1000),
	cpf 		CHAR (14),
    endereco 	VARCHAR (300),
    telefone 	VARCHAR (11),
	adm INT DEFAULT 0,
      token VARCHAR(500) DEFAULT NULL
    );
 
    
CREATE TABLE produtos (
	id 			INT AUTO_INCREMENT PRIMARY KEY,
    nome            VARCHAR(50),
    valor float,
    prazo_validade 	DATE,
    categoria VARCHAR(50)
    );

 
 CREATE TABLE pedido(
	id INT primary key auto_increment, 
	id_usuario INT, 
    id_itens INT, 
    estado VARCHAR(50),
    data_pedido DATE,
    data_entrega DATE,
    FOREIGN KEY (id_usuario) REFERENCES comprador(id),
    FOREIGN KEY (id_itens) REFERENCES produtos(id)
 );
 
INSERT INTO comprador values (Default, "Adm", "adm@gmail.com", "$2a$10$zvv8Bk6.TTrxu2kAhO8H9uiuhwaJ5vIkfe1OMLXmcCxKrpaz1pzv2", "111.111.111-11", "Casa do adm", "11911111111", 1, DEFAULT);
INSERT INTO comprador values (Default, "Geraldo", "emailfalso1@gmail.com", "$2a$10$MI.S.ZUqNbmDSbY/2vnrbuf7peJ4o2C3w2uPWr04416JfLl0mhEHW", "222.222.222-22", "Casa 1", "22922222222", DEFAULT, DEFAULT);
INSERT INTO comprador values (Default, "Fagundes", "emailfalso2@gmail.com", "$2a$10$wuafwCyc26u2LLTi6S2ShuTlZQnCsv/6WCB7ZBzc8YAB4h/mTkmT2", "333.333.333-33", "Casa 2", "33933333333", DEFAULT, DEFAULT);
INSERT INTO comprador values (Default, "Lurdes", "emailfalso3@gmail.com", "$2a$10$khUEVvF.yYpuHLqoOW0Zxe2YpYrFj/nF5CZujuKdjlfi0QXI1vhla", "444.444.444-44", "Casa 3", "44944444444", DEFAULT, DEFAULT);
INSERT INTO produtos(nome,valor,prazo_validade) values("pão de mel", 12.00, '2022-12-12');
INSERT INTO produtos(nome,valor,prazo_validade)  values( "bolo de morango", 12.00, '2022-12-12');
INSERT INTO produtos(nome,valor,prazo_validade)  values("torta de laranja", 12.00, '2022-12-12');
INSERT INTO produtos(nome,valor,prazo_validade)  values( "biscoito de massa folhada", 12.00, '2022-12-12');
