const mysql = require("mysql2/promise")

async function getConnection(){
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        //password: "123456abc78910",
        //database: "confeitaria"
    })

    return connection
}

let query = async function(sql = '', values = []){
    const conn = await getConnection()
    const result = await conn.query(sql, values)
    conn.end()

    return result[0]
}

module.exports = {query}
