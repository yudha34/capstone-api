const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '34.124.164.99',
  user: 'yudha-test',
  password: '12345',
  database: 'db_api',
  port: '3306'
})

module.exports = connection

//connection.connect()

//connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
 // if (err) throw err

 // console.log('The solution is: ', rows[0].solution)
//})

//connection.end()