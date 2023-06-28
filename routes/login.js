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
    //const token = await loginController.fazerLogin(email, senha, checkbox);
    const result = await loginController.fazerLogin(email, senha, checkbox);

    // if (token) {
    //   console.log("Res.cookie (token, token)")
    //   res.cookie("token", token);
    // } else {
    //   console.log("\t- Falha na atribuicao do token")
    // }
    if (result.success) {
      if (result.token) {
        req.session.usuario = result.token;
      }
      else {
        req.session.usuario = req.session.id;
      }
    }

    // req.session.usuario = token
    res.redirect("/");
  }
  catch (ex) {
    console.log("Erro ao efetuar o login")
    res.render("login", { error: true, err_message: ex.message });
  }
});

module.exports = router;
