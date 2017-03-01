const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routerClient = require('./routes/client')
const routerClients = require('./routes/clients')


mongoose.Promise = global.Promise

const PORT = 3000
const app = express()

app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

const urlDB = 'mongodb://localhost:27017/test'
mongoose.connect(urlDB)

app.use('/client', routerClient)
app.use('/clients', routerClients)



app.listen(PORT, () =>
  console.log(`💼 Clients Server running at PORT ${PORT}...`))