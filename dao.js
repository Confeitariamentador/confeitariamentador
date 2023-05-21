const bd = require("./models/Database")

class DAO{
    static create(){
        const query = "INSERT INTO produtos SET ?";
        db.query(query, produto, (err, result) -> {
            if (err) throw err;
            callback(result);
        });
    }
    
    static read(){

    }

    static update(id, cliente, callback){
        const query = "UPDATE clientes SET ? WHERE id = ?";
        db.query(query, [cliente, id], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }

    static delete(){

    }
}
