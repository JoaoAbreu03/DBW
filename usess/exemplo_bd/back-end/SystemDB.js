const mysql = require('mysql')
const config = require('./config.json')
export default class SystemBD{
    connection = null
    constructor(){
        this.connection = mysql.createConnection(config.sql_server)
    }

    get(table){
        this.connection.query(`SELECT * FROM ${table}`, (err, rows, fields) => {
            if(err) throw err
            return rows
        })
    }
}