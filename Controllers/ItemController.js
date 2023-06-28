const Item = require('../model/Item');
const ItemDAO = require('../DAO/ItemDAO');

module.exports = class ItemController{
    static async getById(req, res){
        let item = await ItemDAO.getById(req.params.id);
        res.json(item);
    }

    static async getByName(req, res){
        let item = await ItemDAO.getByName(req.params.nome);
        res.json(item);
    }

    static async create(req, res){
        let item = new Item(null, req.body.nome, req.body.prazoValidade);
        let id = await ItemDAO.insert(item);
        res.json(id);
    }

    static async update(req, res){
        let item = new Item(req.params.id, req.body.nome, req.body.prazoValidade);
        await ItemDAO.update(item);
        res.sendStatus(200);
    }

    static async delete(req, res){
        await ItemDAO.delete(req.params.id);
        res.sendStatus(200);
    }
}
