const express = require("express")
const bd = require("../models/Database")
const bcrypt = require("bcryptjs")

class UserController {
    constructor(){
        this.router = express.Router();
        this.router.get("/", this.showForm.bind(this));
        this.router.post("/", this.register.bind(this));
    }

    async showForm(req, res) {
        res.render("cadastro");
    }

    async register(req, res) {
        let {nome, email, cpf, endereco, telefone, senha} = req.body;
        try {
            this.validateInputs({nome, email, cpf, endereco, telefone, senha});

            let emailJaCadastrado = await bd.query(`Select * from clientes where email = ?`, email)
            if(emailJaCadastrado.length)
                throw new Error("Email já cadastrado!");

            let hashedPassword = await this.hashPassword(senha);
            let values = [nome, email, hashedPassword, cpf, endereco, telefone];
            await bd.query("INSERT INTO clientes VALUES (default,?,?,?,?,?,?,default, default)", values);

            this.renderSuccess(res);
        }
        catch (ex) {
            this.renderError(res, ex);
        }
    }

    validateInputs(inputs) {
        // Coloque as regras de validação aqui
    }

    hashPassword(senha) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (erro, salt)=>{
                if(erro){
                    reject(erro);
                }
                bcrypt.hash(senha, salt, (erro, hash) => {
                    if(erro){
                        reject(erro);
                    }
                    resolve(hash);
                });
            });
        });
    }

    renderSuccess(res) {
        res.render("cadastro", {success: true});
    }

    renderError(res, ex) {
        res.render("cadastro", {error: true, err_message: ex.message});
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new UserController().getRouter();
