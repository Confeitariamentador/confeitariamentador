const db = require('../models/Database')

module.exports = class PedidoDAO{
    static async getById(id){
        let results = await db.query("SELECT * FROM pedido WHERE id=?", [id]);
        return results;
    }

    static async getByUser(id_usuario){
        let results = await db.query("SELECT * FROM pedido WHERE id_usuario=?", [id_usuario]);
        return results;
    }

    static async insert(pedido){
        let results = await db.query("INSERT INTO pedido (id_usuario, id_itens, estado, data_pedido, data_entrega) VALUES (?, ?, ?, ?, ?)", 
        [pedido.getComprador().getId(), pedido.getItens().map(item => item.getId()), pedido.getEstado(), pedido.getdataPedido(), pedido.getDataEntrega()]);
        return results.insertId;
    }

    static async update(pedido){
        let results = await db.query("UPDATE pedido SET id_usuario=?, id_itens=?, estado=?, data_pedido=?, data_entrega=? WHERE id=?", 
        [pedido.getComprador().getId(), pedido.getItens().map(item => item.getId()), pedido.getEstado(), pedido.getdataPedido(), pedido.getDataEntrega(), pedido.getId()]);
    }

    static async delete(id){
        let results = await db.query("DELETE FROM pedido WHERE id=?", [id]);
    }
    static async getByCompradorId(compradorId) {
        let results = await db.query("SELECT * FROM pedido WHERE id_usuario=?", [compradorId]);
        return results;
    }
    
}
