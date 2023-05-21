const bd = require("./models/Database")

class DAO{
    static create(){

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