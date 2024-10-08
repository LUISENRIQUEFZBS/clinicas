const mysql = require('mysql2')
const util = require('util');

const pool = mysql.createPool({
  connectionLimit: 5, //important
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'clinicas'
})

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
pool.query = util.promisify(pool.query)
module.exports = 
    pool
    // async query(text) {
    //     // pool.query (text, function (err, rows) { console.log(rows);res.send (rows);}); 


    //     let res;
    //     try {
    //         res = await pool.query(text)
    //     } catch (err) {
    //         res =err;
    //     }
    //     return res;
    // }
    
