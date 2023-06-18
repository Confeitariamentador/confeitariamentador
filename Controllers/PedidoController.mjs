const Pedido = require('../models/Pedido');
const PedidoDAO = require('../DAO/PedidoDAO');

module.exports = class PedidoController{
    static async getById(req, res){
        let pedido = await PedidoDAO.getById(req.params.id);
        res.json(pedido);
    }

    static async getByUser(req, res){
        let pedidos = await PedidoDAO.getByUser(req.params.id_usuario);
        res.json(pedidos);
    }

    static async create(req, res){
        let pedido = new Pedido(null, req.body.comprador, req.body.itens, req.body.estado, req.body.dataPedido, req.body.dataEntrega);
        let id = await PedidoDAO.insert(pedido);
        res.json(id);
    }

    static async update(req, res){
        let pedido = new Pedido(req.params.id, req.body.comprador, req.body.itens, req.body.estado, req.body.dataPedido, req.body.dataEntrega);
        await PedidoDAO.update(pedido);
        res.sendStatus(200);
    }

    static async delete(req, res){
        await PedidoDAO.delete(req.params.id);
        res.sendStatus(200);
    }
    static async getHistoricoByCompradorId(req, res) {
        let pedidos = await PedidoDAO.getByCompradorId(req.params.compradorId);
        res.json(pedidos);
    }
    
}
