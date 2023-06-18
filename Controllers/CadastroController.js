const ClienteModel = require("../model/ClienteModel");

class CadastroController {
  constructor() {
    this.clienteModel = new ClienteModel();
  }

  async cadastrarCliente(nome, email, senha, cpf, endereco, telefone) {
    try {
      await this.clienteModel.criarCliente(
        nome,
        email,
        senha,
        cpf,
        endereco,
        telefone
      );
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = CadastroController;
