const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const connection = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const sql = "SELECT * FROM equipment"
  connection.query(sql, (err, result) => {
    //hasil dari query mysql
    response(200, result, "get all data from equipment", res)
  })

})

app.post('/search', (req, res) => {
  console.log({requestOutside: req.body})
  const name = req.body.name
  if (req.body.name === "yudha")
  res.send(`Login berhasil ${name}`)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})