const db = require('../models/Database')

module.exports = class ItemDAO{
    static async getById(id){
        let results = await db.query("SELECT * FROM produtos WHERE codigo=?", [id]);
        return results;
    }

    static async getByName(nome){
        let results = await db.query("SELECT * FROM produtos WHERE nome=?", [nome]);
        return results;
    }

    static async insert(item){
        let results = await db.query("INSERT INTO produtos (nome, dataValidade) VALUES (?, ?)", 
        [item.getNome(), item.getPrazoValidade()]);
        return results.insertId;
    }

    static async update(item){
        let results = await db.query("UPDATE produtos SET nome=?, dataValidade=? WHERE codigo=?", 
        [item.getNome(), item.getPrazoValidade(), item.getId()]);
    }

    static async delete(id){
        let results = await db.query("DELETE FROM produtos WHERE codigo=?", [id]);
    }
}
