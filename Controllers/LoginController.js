const ClienteModel = require("../model/ClienteModel");

class LoginController {
  constructor() {
    this.clienteModel = new ClienteModel();
  }

  async fazerLogin(email, senha, checkbox) {
    try {
      const userId = await this.clienteModel.verificarCredenciais(email, senha);
      /// const token = await this.clienteModel.gerarToken(userId);
      
      if (checkbox) {
        // Gera o token e ja armazena no banco de dados;
        const token = await this.clienteModel.gerarToken(userId);
        
        // console.log("Token gerado com sucesso")
        return { success: true, token };
      }

      return { success: true };
    }
    catch (ex) {
      console.log("Excecao gerada em LoginController")
      throw ex;
    }
  }
}

module.exports = LoginController;
