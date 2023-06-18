const bd = require("../database/Database");

class ProdutoDAO {
  async obterProdutosPorCategoria(categoria) {
    const query = `
      SELECT valorUnidade, codigo, nome FROM produtos
      WHERE produtos.categoria = ?
    `;

    const produtos = await bd.query(query, [categoria]);

    produtos.forEach((element) => {
      element.valorUnidade = parseFloat(element.valorUnidade).toFixed(2);
    });

    return produtos;
  }

  async excluirProduto(codigo) {
    const query = `DELETE FROM produtos WHERE produtos.codigo = ?`;
    await bd.query(query, [codigo]);
  }
}

module.exports = ProdutoDAO;
