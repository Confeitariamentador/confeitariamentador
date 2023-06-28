const ProdutoDAO = require("../DAO/ProdutoDAO");

class LojaController {
  constructor() {
    this.produtoDAO = new ProdutoDAO();
  }

  async obterProdutosPorCategoria(categoria) {
    try {
      const produtos = await this.produtoDAO.obterProdutosPorCategoria(
        categoria
      );
      return produtos;
    } catch (ex) {
      //console.log("Exception obterProdutosPorCategoria")
      throw ex;
    }
  }

  async excluirProduto(codigo) {
    try {
      await this.produtoDAO.excluirProduto(codigo);
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = LojaController;
