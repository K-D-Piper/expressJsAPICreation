//! THIS IS OUR DATABASE CONNECTION FIL E

//? Import mysql package
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'restaurants'
});

//? THIS MAKES our variable "pool" avaiable through out our project!
module.exports = pool;

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error("Database connection was closed.");
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error("Databse has too many connections.")
        }
        if(err.code === 'ECONNREFUSED'){
            console.error("Database connection was refused")
        }
    }
    connection.release()
    return;
})