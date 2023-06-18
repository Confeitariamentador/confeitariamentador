const Comprador = require('../models/Comprador');
const CompradorDAO = require('../DAO/CompradorDAO');

module.exports = class CompradorController{
    static async getById(req, res){
        let comprador = await CompradorDAO.getById(req.params.id);
        res.json(comprador);
    }

    static async getByEmail(req, res){
        let comprador = await CompradorDAO.getByEmail(req.params.email);
        res.json(comprador);
    }

    static async create(req, res){
        let comprador = new Comprador(null, req.body.nome, req.body.senha, req.body.email, []);
        let id = await CompradorDAO.insert(comprador);
        res.json(id);
    }

    static async update(req, res){
        let comprador = new Comprador(req.params.id, req.body.nome, req.body.senha, req.body.email, req.body.historicoPedidos);
        await CompradorDAO.update(comprador);
        res.sendStatus(200);
    }

    static async delete(req, res){
        await CompradorDAO.delete(req.params.id);
        res.sendStatus(200);
    }
}
