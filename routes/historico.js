const express = require('express');
const router = express.Router();
const bd = require('../database/Database');
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }

  // Aqui você pode obter os dados do histórico de compras do cliente
  //const historicoCompras = await obterHistoricoCompras(req.session.usuario.id);

  res.render("historico");
});

module.exports = router;
