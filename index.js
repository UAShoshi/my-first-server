const express = require('express')
var cors = require('cors');
const phones = require('./phones.json');
const app = express()
const port = 5000;

app.use(cors())


app.get('/', (req, res) => {
  res.send('my phone server coming soon toon!')
})

app.get('/phones', (req, res) => {
  res.send(phones)
})

app.get('/phones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log('I need data for id', id);
  const phone = phones.find(phone => phone.id === id) || {};
  res.send(phone);
})

app.listen(port, () => {
  console.log(`My first server is coming on port ${port}`)
})