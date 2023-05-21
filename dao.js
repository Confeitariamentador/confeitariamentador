const bd = require("./models/Database")

class DAO{
    static create(table, produto, callback){
        const query = "INSERT INTO ? SET ?";
        db.query(query, [table, produto], (err, result) -> {
            if (err) throw err;
            callback(result);
        });
    }
    
    static read(attribute, table, codigo,callback,id ){
        bd.query("SELECT ? FROM ? WHERE codigo = ?", [attribute, table, codigo]).then((result) => {
            callback(result)
        })
    }

    static update(table, id, cliente, callback){
        const query = "UPDATE ? SET ? WHERE id = ?";
        db.query(query, [table, cliente, id], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }

    static delete(table, codigo, callback){
        bd.query("DELETE FROM ? WHERE codigo = ?", [codigo]).then((result) => {
            callback(result)
        })
    }
}
