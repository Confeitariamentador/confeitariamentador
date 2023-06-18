const express = require('express');
const bd = require('../models/Database')
const bcrypt = require("bcryptjs")

class LojaController {
    constructor() {
        this.router = express.Router();
        this.router.get("/", this.getLoja.bind(this));
        this.router.post("/", this.postLoja.bind(this));
        this.router.get("/bolos", this.getBolos.bind(this));
        this.router.get("/paes", this.getPaes.bind(this));
        this.router.get("/tortas", this.getTortas.bind(this));
        this.router.get("/mil_folhas", this.getMilFolhas.bind(this));
        this.router.get("/excluir-produtos", this.getExcluirProdutos.bind(this));
        this.router.get("/excluir-home", this.getExcluirHome.bind(this));
        this.router.post("/excluir-home", this.postExcluirHome.bind(this));
        this.router.get("/excluir-produto/:id", this.getExcluirProduto.bind(this));
        this.router.get("/confirmar-compra/:id", this.getConfirmarCompra.bind(this));
    }

    async getLoja(req, res) {
        if (!req.session.usuario) {
            res.redirect("/login");
            return;
        }
        res.render("loja");
    }

    async postLoja(req, res) {
        let {email, senha} = req.body;

    try {
        const query = `
            SELECT senha, id FROM clientes
            WHERE clientes.email = ?
        `;

        let consulta = (await bd.query(query, [email]))[0];

        bcrypt.compare(senha, consulta.senha, (err, result) => {
            if (!result || consulta.id != req.session.usuario)
                res.render("confirmar", {error: true, err_message: "Usuário, senha ou conta incorreto incorreto"});
            else {
                /*if (keep_logged) {
                    const token = uuidv4();
                    (token);
                    const isOk = await db.query("UPDATE usuarios SET token = ? WHERE usuario_id = ?", [token, resultado[0].usuario_id]);
                    (isOk);
                    res.cookie("token", token);
                }*/
                req.session.usuario = consulta.id
                res.redirect("/loja")
                return
            }
        })
    }
    catch (ex) {
        res.render("confirmar", {error: true, err_message: "Usuário ou senha incorreto"});
    }
    }

    async getBolos(req, res) {
         // Selecionar todos o produtos no banco de dados
    if (!req.session.usuario) {
        res.redirect("/login");
        return;
    }
    let values = [];
    // retorna uma lista de objetos
    const query = `
        SELECT valorUnidade, codigo, nome FROM produtos
        WHERE produtos.categoria = 'Bolos'
    `;

    let produtos = await bd.query(query, values);

    produtos.forEach((element) => {
        (element.valorUnidade);
        element.valorUnidade = `${parseFloat(element.valorUnidade).toFixed(2)}`;
    })
    
    res.render("produtos", {produto: "Bolos", produtos});
    }

    async getPaes(req, res) {
        if (!req.session.usuario) {
            res.redirect("/login");
            return;
        }
        let values = [];
        // retorna uma lista de objetos
    
        const query = `
            SELECT valorUnidade, codigo, nome FROM produtos
            WHERE produtos.categoria = 'Paes'
        `;
    
        let produtos = await bd.query(query, values);
    
        produtos.forEach((element) => {
            (element.valorUnidade);
            element.valorUnidade = `${parseFloat(element.valorUnidade).toFixed(2)}`;
        })
    
        res.render("produtos", {produto: "Pães", produtos});
    }

    async getTortas(req, res) {
        if (!req.session.usuario) {
            res.redirect("/login");
            return;
        }
        let values = [];
        // retorna uma lista de objetos
    
        // Retorna o ID do usuário
        // (`USERID: ${req.session.usuario}`);
    
        const query = `
            SELECT valorUnidade, codigo, nome FROM produtos
            WHERE produtos.categoria = 'Tortas'
        `;
    
        let produtos = await bd.query(query, values);
    
        produtos.forEach((element) => {
            element.valorUnidade = `${parseFloat(element.valorUnidade).toFixed(2)}`;
        })
    
        res.render("produtos", {produto: "Tortas", produtos});
    }

    async getMilFolhas(req, res) {
        if (!req.session.usuario) {
            res.redirect("/login");
            return;
        }
        let values = [];
        // retorna uma lista de objetos
        const query = `
            SELECT valorUnidade, codigo, nome FROM produtos
            WHERE produtos.categoria = 'Mil Folhas'
        `;
    
        let produtos = await bd.query(query, values);
        
        // ([...produtos]);
        produtos.forEach((element) => {
            element.valorUnidade = `${parseFloat(element.valorUnidade).toFixed(2)}`;
        })
    
        res.render("produtos", {produto: "Mil Folhas", produtos});
    }

    async getExcluirProdutos(req, res) {
        if (!req.session.usuario)
        {
            res.redirect("/login");
            return;
        }
        let usuario = await bd.query("SELECT adm FROM clientes WHERE clientes.id = ?", req.session.usuario);
        
        // [{ adm: 1}]
        // (usuario[0].adm);
    
        // SE o usuário é um admin
        if (usuario[0].adm == 1) {
            res.render("excluir");
        }
        else {
            res.redirect("/loja");
        }
    }

    async getExcluirHome(req, res) {
        if (!req.session.usuario)
    {
        res.redirect("/login");
        return;
    }
    let usuario = await bd.query("SELECT adm FROM clientes WHERE clientes.id = ?", req.session.usuario);
    
    // [{ adm: 1}]
    // (usuario[0].adm);

    // SE o usuário é um admin
    if (usuario[0].adm == 1) {
        res.render("excluir");
    }
    else {
        res.redirect("/loja");
    }
    }

    async postExcluirHome(req, res) {
        if (!req.session.usuario)
        {
            res.redirect("/login");
            return;
        }
    
        if (!req.session.usuario)
        {
            res.redirect("/login");
            return;
        }
        let usuario = await bd.query("SELECT adm FROM clientes WHERE clientes.id = ?", req.session.usuario);
        
        // [{ adm: 1}]
        // (usuario[0].adm);
    
        // SE o usuário é um admin
        if (usuario[0].adm != 1) {
            res.redirect("/loja");
        }
    
        let categoria = req.body.categoria;
    
        (categoria);
    
        let values = [categoria];
        let produtos = await bd.query("SELECT * FROM produtos WHERE produtos.categoria = ?", values);
        res.render("excluir", {produtos});
    }

    async getExcluirProduto(req, res) {
        if (!req.session.usuario) {
            res.redirect("/login");
            return;
        }
        const codigo = parseInt(req.params.id);
        let values = [codigo];
        const query = `
            DELETE FROM produtos WHERE produtos.codigo = ?
        `;

        await bd.query(query, values);
        res.redirect("/loja");
    }

    getConfirmarCompra(req, res) {
        if (!req.session.usuario) {
            res.redirect("/login");
            return;
        }
        const codigo = parseInt(req.params.id);
        res.render("confirmar", {id: codigo});
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new LojaController().getRouter();
