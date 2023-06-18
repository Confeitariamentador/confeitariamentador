const ClienteModel = require("../model/ClienteModel");

class LoginController {
  constructor() {
    this.clienteModel = new ClienteModel();
  }

  async fazerLogin(email, senha, checkbox) {
    try {
      const userId = await this.clienteModel.verificarCredenciais(email, senha);

      if (checkbox) {
        const token = await this.clienteModel.gerarToken(userId);
        return token;
      }

      return null;
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = LoginController;
