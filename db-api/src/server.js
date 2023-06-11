
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
 

    response(200, "Response Success", "Api-Started", res)
    console.log("Response success")


})


app.get('/equipment', (req, res) => {
  const sql = "SELECT * FROM  equipment"
  connection.query(sql, (err, result) => {
    //hasil dari query mysql
    response(200, result, "get all data from equipment", res)
  })

})

app.get('/equipment/:equipment_id', (req, res) => {
  const sql = `SELECT * FROM equipment WHERE equipment_id = ${req.params.equipment_id} `
  connection.query(sql, (err, result) => {
    //hasil dari query mysql
    response(200, result, `get data by id ${req.params.equipment_id}`, res)
  })
  
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("App listening on Port " + PORT)
})