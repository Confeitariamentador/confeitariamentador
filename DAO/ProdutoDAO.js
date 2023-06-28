const bd = require("../database/Database");

class ProdutoDAO {
  async obterProdutosPorCategoria(categoria) {
    const query = `
      SELECT valor, id, nome FROM produtos
      WHERE produtos.categoria = ?
    `;
    
    console.log(`Pesquisando por produtos da categoria: ${categoria}`)
    const produtos = await bd.query(query, [categoria]);

    produtos.forEach((element) => {
      console.log(element.valor)
      element.valor = parseFloat(element.valor).toFixed(2);
    });

    return produtos;
  }

  async excluirProduto(codigo) {
    const query = `DELETE FROM produtos WHERE produtos.id = ?`;
    await bd.query(query, [codigo]);
  }
}

module.exports = ProdutoDAO;
