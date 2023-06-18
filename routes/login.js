const express = require("express");
const router = express.Router();
const LoginController = require("../Controllers/LoginController");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const { email, senha, checkbox } = req.body;
  const loginController = new LoginController();

  try {
    const token = await loginController.fazerLogin(email, senha, checkbox);

    if (token) {
      res.cookie("token", token);
    }

    req.session.usuario = token ? null : consulta.id;
    res.redirect("/");
  } catch (ex) {
    res.render("login", { error: true, err_message: ex.message });
  }
});

module.exports = router;
