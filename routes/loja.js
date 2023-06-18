const express = require("express");
const router = express.Router();
const LojaController = require("../Controllers/LojaController");

router.get("/", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }
  res.render("loja");
});

router.post("/", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const query = `SELECT senha, id FROM clientes WHERE clientes.email = ?`;
    const consulta = (await bd.query(query, [email]))[0];

    bcrypt.compare(senha, consulta.senha, (err, result) => {
      if (!result || consulta.id != req.session.usuario)
        res.render("confirmar", {
          error: true,
          err_message: "Usuário ou senha incorreto",
        });
      else {
        req.session.usuario = consulta.id;
        res.render("loja", { success: true });
        return;
      }
    });
  } catch (ex) {
    res.render("confirmar", {
      error: true,
      err_message: "Usuário ou senha incorreto",
    });
  }
});

router.get("/bolos", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const produtos = await lojaController.obterProdutosPorCategoria("Bolos");
    res.render("produtos", { produto: "Bolos", produtos });
  } catch (ex) {
    res.redirect("/login");
  }
});

router.get("/paes", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const produtos = await lojaController.obterProdutosPorCategoria("Paes");
    res.render("produtos", { produto: "Pães", produtos });
  } catch (ex) {
    res.redirect("/login");
  }
});

router.get("/tortas", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const produtos = await lojaController.obterProdutosPorCategoria("Tortas");
    res.render("produtos", { produto: "Tortas", produtos });
  } catch (ex) {
    res.redirect("/login");
  }
});

router.get("/mil_folhas", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const produtos = await lojaController.obterProdutosPorCategoria("Mil Folhas");
    res.render("produtos", { produto: "Mil Folhas", produtos });
  } catch (ex) {
    res.redirect("/login");
  }
});

router.get("/cadastrar-home", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const usuario = await lojaController.verificarAdm(req.session.usuario);

    if (usuario.adm == 1) {
      res.render("cadastrarProdutos");
    } else {
      res.redirect("/loja");
    }
  } catch (ex) {
    res.redirect("/loja");
  }
});

router.post("/cadastrar-home", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const usuario = await lojaController.verificarAdm(req.session.usuario);

    if (usuario.adm != 1) {
      res.redirect("/loja");
      return;
    }

    const { nome, valorUnidade, categoria } = req.body;
    await lojaController.cadastrarProduto(nome, valorUnidade, categoria);

    res.render("cadastrarProdutos", { success: true });
  } catch (ex) {
    res.redirect("/loja");
  }
});

router.get("/excluir-produtos", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const usuario = await lojaController.verificarAdm(req.session.usuario);

    if (usuario.adm == 1) {
      res.render("excluir");
    } else {
      res.redirect("/loja");
    }
  } catch (ex) {
    res.redirect("/loja");
  }
});

router.get("/excluir-home", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const usuario = await lojaController.verificarAdm(req.session.usuario);

    if (usuario.adm == 1) {
      res.render("excluir");
    } else {
      res.redirect("/loja");
    }
  } catch (ex) {
    res.redirect("/loja");
  }
});

router.post("/excluir-home", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  try {
    const lojaController = new LojaController();
    const usuario = await lojaController.verificarAdm(req.session.usuario);

    if (usuario.adm != 1) {
      res.redirect("/loja");
      return;
    }

    const categoria = req.body.categoria;
    const produtos = await lojaController.obterProdutosPorCategoria(categoria);

    res.render("excluir", { produtos });
  } catch (ex) {
    res.redirect("/loja");
  }
});

router.get("/excluir-produto/:id", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  const codigo = parseInt(req.params.id);

  try {
    const lojaController = new LojaController();
    await lojaController.excluirProduto(codigo);

    res.redirect("/loja");
  } catch (ex) {
    res.redirect("/loja");
  }
});

router.get("/confirmar-compra/:id", (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  const codigo = parseInt(req.params.id);
  res.render("confirmar", { id: codigo });
});

module.exports = router;
