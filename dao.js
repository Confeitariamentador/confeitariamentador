const bd = require("./models/Database")

class DAO{
    static create(produto, callback){
        const query = "INSERT INTO produtos SET ?";
        db.query(query, produto, (err, result) -> {
            if (err) throw err;
            callback(result);
        });
    }
    
    static read(table, codigo,callback,id ){
        if(table === "cliente"){
            bd.query("SELECT * FROM cliente WHERE codigo = ?", [codigo]).then((result) => {
                callback(result)
            })
        }
        else if(table === "produto"){
            bd.query("SELECT * FROM produto WHERE codigo = ?", [codigo]).then((result) => {
                callback(result)
            })
        }

    }

    static update(id, cliente, callback){
        const query = "UPDATE clientes SET ? WHERE id = ?";
        db.query(query, [cliente, id], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }

    static delete(table, codigo, callback){
        if(table == "cliente"){
            bd.query("DELETE FROM cliente WHERE codigo = ?", [codigo]).then((result) => {
                callback(result)
            })
        }
        else if(table == "produto"){
            bd.query("DELETE FROM produto WHERE codigo = ?", [codigo]).then((result) => {
                callback(result)
            })
        }
    }
}
