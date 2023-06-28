const mysql = require("mysql2/promise")

async function getConnection(){
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "12345678",
        database: "Confeitaria"
    })

    return connection
}

let query = async function(sql = '', values = []){
    const conn = await getConnection()
    const result = await conn.query(sql, values)

    return result[0]
}

module.exports = {query}
