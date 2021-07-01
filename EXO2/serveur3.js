const express = require('express')
const app = express()
const port = 3003
const fetch = require('node-fetch');

const data = "4567 5372"

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }
})
