const ClienteDAO = require("../DAO/ClienteDAO");
const bcrypt = require("bcryptjs");
const bd = require("../database/Database")
const uuidv4 = require('uuid');

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

    // console.log("Sintaxe do email verificado com sucesso");
    const query = `SELECT senha, id FROM comprador WHERE comprador.email = ?`;
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
    const token = uuidv4.v4();
    // console.log("\tToken created")
    await bd.query("UPDATE comprador SET token = ? WHERE id = ?", [token, id]);
    return token;
  }
}

module.exports = ClienteModel;
