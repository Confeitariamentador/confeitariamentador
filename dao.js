const bd = require("./models/Database")

class DAO{
    static create(){

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

    static update(){

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