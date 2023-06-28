const bd = require("../database/Database");
const bcrypt = require("bcryptjs");

class ClienteDAO {
  async criarCliente(nome, email, senha, cpf, endereco, telefone) {
    let hashSenha = await bcrypt.hash(senha, 10);

    let values = [nome, email, hashSenha, cpf, endereco, telefone];
    await bd.query(
      "INSERT INTO comprador VALUES (default,?,?,?,?,?,?,default, default)",
      values
    );
  }

  async verificarEmail(email) {
    let resultado = await bd.query(
      `SELECT * FROM comprador WHERE email = ?`,
      email
    );
    return resultado.length > 0;
  }
}

module.exports = ClienteDAO;
