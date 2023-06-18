const express = require("express")
const bd = require("../models/Database")
const bcrypt = require("bcryptjs")
const uuidv4 = require('uuid').v4;

class LoginController {
    constructor() {
        this.router = express.Router();
        this.router.get("/", this.showLoginForm.bind(this));
        this.router.post("/", this.login.bind(this));
    }

    showLoginForm(req, res) {
        res.render("login");
    }

    async login(req, res) {
        let {email, senha, checkbox} = req.body;

        const regexEmail = /^([a-z]|[A-Z]|[0-9]|[\_]|[\@]|[\.]){10,50}$/;

        try {
            if (!regexEmail.test(email))
                throw new Error("Email Inválido");
            
            const query = `
                SELECT senha,id FROM clientes
                WHERE clientes.email = ?
            `;

            let consulta = (await bd.query(query, [email]))[0]
            bcrypt.compare(senha, consulta.senha, async (err, result)=>{
                if (!result)
                    this.renderLoginError(res, "Usuário ou senha incorreto");
                else {
                    if (checkbox) {
                        const token = uuidv4();
                        const isOk = await bd.query("UPDATE clientes SET token = ? WHERE id = ?", [token, consulta.id]);
                        res.cookie("token", token);
                    }
                    req.session.usuario = consulta.id
                    res.redirect("/")
                    return
                }
            })
        }
        catch (ex)
        {
            this.renderLoginError(res, "Usuário ou senha incorretos");
        }
    }

    renderLoginError(res, message) {
        res.render ("login", {error: true, err_message: message});
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new LoginController().getRouter();
