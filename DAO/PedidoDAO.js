const db = require('../database/Database')

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
        console.log(pedido.getItens(),pedido.getId())
        let results = await db.query("INSERT INTO pedido (item,id_usuario) VALUES (?, ?)", 
        [pedido.getItens(), pedido.getId()]);
        return results.insertId;
    }

    static async update(pedido){
        let results = await db.query("UPDATE pedido SET id_usuario=?, id_itens=?  WHERE id=?", 
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
