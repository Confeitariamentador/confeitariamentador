const express = require("express");
const router = express.Router();
const CadastroController = require("../Controllers/CadastroController");

router.get("/", (req, res) => {
  res.render("cadastro");
});

router.post("/", async (req, res) => {
  let cadastroController = new CadastroController();
  let { nome, email, cpf, endereco, telefone, senha } = req.body;

  try {
    await cadastroController.caadastrarCliente(
      nome,
      email,
      senha,
      cpf,
      endereco,
      telefone
    );
    res.render("cadastro", { success: true });
  } catch (ex) {
    res.render("cadastro", { error: true, err_message: ex.message });
  }
});

module.exports = router;
