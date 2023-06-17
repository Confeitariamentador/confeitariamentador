const bd = require("./models/Database")

class DAO{
    static create(table, value, callback){
        const query = "INSERT INTO ? SET ?";
        db.query(query, [table, value], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
    
    static read(selecAttrib, table, value, whereAttrib, callback){
        bd.query("SELECT ? FROM ? WHERE ? = ?", [selecAttrib, table, whereAttrib, value]).then((result) => {
            callback(result)
        })
    }

    static update(table, setValue, attrib, whereValue, callback){
        const query = "UPDATE ? SET ? WHERE ? = ?";
        db.query(query, [table, setValue, attrib, whereValue], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }

    static delete(table, attrib, value, callback){
        bd.query("DELETE FROM ? WHERE ? = ?", [table, attrib, value]).then((result) => {
            callback(result)
        })
    }
}
