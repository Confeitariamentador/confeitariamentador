const express = require('express');
const router = express.Router();
const bd = require('../database/Database');
const bcrypt = require("bcryptjs");
const PedidoController = require('../Controllers/PedidoController');

router.get("/", async (req, res) => {
  if (!req.session.usuario) {
    res.redirect("/login");
    return;
  }
  console.log(req.session.usuario);
  const historicoCompras = await PedidoController.getHistoricoByCompradorId(req.session.usuario);
  console.log(historicoCompras, " teste")
  res.render("historico",{historicoCompras});
});

module.exports = router;
