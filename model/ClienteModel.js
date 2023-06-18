const ClienteDAO = require("../DAO/ClienteDAO");
const bcrypt = require("bcryptjs");
const bd = require("../database/Database")

class ClienteModel {
  constructor() {
    this.clienteDAO = new ClienteDAO();
  }

  async criarCliente(nome, email, senha, cpf, endereco, telefone) {
    if (await this.clienteDAO.verificarEmail(email)) {
      throw new Error("Email já cadastrado!");
    }

    let hashSenha = await bcrypt.hash(senha, 10);
    await this.clienteDAO.criarCliente(
      nome,
      email,
      hashSenha,
      cpf,
      endereco,
      telefone
    );
  }

  async verificarCredenciais(email, senha) {
    const regexEmail = /^([a-z]|[A-Z]|[0-9]|[\_]|[\@]|[\.]){10,50}$/;

    if (!regexEmail.test(email)) {
      throw new Error("Email Inválido");
    }

    const query = `SELECT senha, id FROM clientes WHERE clientes.email = ?`;
    const consulta = (await bd.query(query, [email]))[0];

    return new Promise((resolve, reject) => {
      bcrypt.compare(senha, consulta.senha, async (err, result) => {
        if (err || !result) {
          reject(new Error("Usuário ou senha incorretos"));
        } else {
          resolve(consulta.id);
        }
      });
    });
  }

  async gerarToken(id) {
    const token = uuidv4();
    await bd.query("UPDATE clientes SET token = ? WHERE id = ?", [token, id]);
    return token;
  }
}

module.exports = ClienteModel;
