const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

var cors = require('cors');
app.use(cors({origin: 'http://localhost:8100'}));
app.use(express.json())

mongoose.connect("mongodb://0.0.0.0:27017/llego_bd")
const database = mongoose.connection
database.on('error', (error) => {
    console.log('Hubo un error', error)
})
database.once('connected', () => {
    console.log('Base de datos conectada!')
})


/* DE EVENTOS */
const eventos = require('./routes/eventos')
app.use('/eventos', eventos)

/* DE AMIGOS */
const amigos = require('./routes/amigos')
app.use('/amigos', amigos)

app.listen(port, () => {
    console.log('Ingrese a localhost:3000')
})