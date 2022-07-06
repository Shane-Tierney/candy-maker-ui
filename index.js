const express = require('express')
const path = require('path')
const cors = require('cors')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')

const app = express()

app.use(cors())

app.use(express.static('client/build'))

app.get('/api/manufacturers', getAllManufacturers)

app.get('/api/manufacturers/:id', getManufacturerById)

app.get('/api/products', getAllProducts)

app.get('/api/products/:id', getProductsById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.use('*', (req, res) => { res.sendStatus(404) })

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
