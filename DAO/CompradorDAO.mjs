const db = require('../database/Database')

module.exports = class CompradorDAO
{
    static async getById(id){
        let results = await db.query("SELECT * FROM clientes WHERE id=?", [id]);
        return results;
    }

    static async getByEmail(email){
        let results = await db.query("SELECT * FROM clientes WHERE email=?", [email]);
        return results;
    }

    static async insert(comprador){
        let results = await db.query("INSERT INTO clientes (nome, email, senha) VALUES (?, ?, ?)",
        [comprador.getNome(), comprador.getEmail(), bcrypt.hashSync(comprador.getSenha(), 10)]);
        return results.insertId;
    }

    static async update(comprador){
        let results = await db.query("UPDATE clientes SET nome=?, email=?, senha=? WHERE id=?", 
        [comprador.getNome(), comprador.getEmail(), bcrypt.hashSync(comprador.getSenha(), 10), comprador.getId()]);
    }

    static async delete(id){
        let results = await db.query("DELETE FROM clientes WHERE id=?", [id]);
    }
}
