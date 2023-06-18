CREATE DATABASE Confeitaria;
USE Confeitaria;



CREATE TABLE comprador (
	id	INT	PRIMARY KEY AUTO_INCREMENT,
    nome varchar(100),
    email	VARCHAR(50),
    senha	VARCHAR(1000),
      token VARCHAR(500) DEFAULT NULL
    );
 
    
CREATE TABLE produtos (
	id 			INT AUTO_INCREMENT PRIMARY KEY,
    nome            VARCHAR(50),
     valor float,
    prazo_validade 	DATE);

 
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
 
INSERT INTO comprador(nome,email,senha,token) values ("Adm", "adm@gmail.com", "$2a$10$zvv8Bk6.TTrxu2kAhO8H9uiuhwaJ5vIkfe1OMLXmcCxKrpaz1pzv2", "11911111111");
INSERT INTO comprador(nome,email,senha,token)  values ("Geraldo", "emailfalso1@gmail.com", "$2a$10$MI.S.ZUqNbmDSbY/2vnrbuf7peJ4o2C3w2uPWr04416JfLl0mhEHW",  "22922222222");
INSERT INTO comprador(nome,email,senha,token)  values ("Fagundes", "emailfalso2@gmail.com", "$2a$10$wuafwCyc26u2LLTi6S2ShuTlZQnCsv/6WCB7ZBzc8YAB4h/mTkmT2","33933333333");
INSERT INTO comprador(nome,email,senha,token)  values ( "Lurdes", "emailfalso3@gmail.com", "$2a$10$khUEVvF.yYpuHLqoOW0Zxe2YpYrFj/nF5CZujuKdjlfi0QXI1vhla","44944444444");
INSERT INTO produtos(nome,valor,prazo_validade) values("pão de mel", 12.00, '2022-12-12');
INSERT INTO produtos(nome,valor,prazo_validade)  values( "bolo de morango", 12.00, '2022-12-12');
INSERT INTO produtos(nome,valor,prazo_validade)  values("torta de laranja", "12.00", '2022-12-12');
INSERT INTO produtos(nome,valor,prazo_validade)  values( "biscoito de massa folhada", 12.00, '2022-12-12');
