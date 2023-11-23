const express = require('express')
const router = express.Router()
const EventoServices = require('../services/EventoServices')

router.get('/listado',async (req, res) => {

    const eventos = await EventoServices.getAllEventos();
    res.json({
        'eventos':eventos
    })

    // res.send('Listado de eventos')
})

router.get('/detalle/:id',async (req, res) => {
    try {
    const evento = await EventoServices.getEventoById(req.params.id);
    res.json({
        'evento':evento
    })
} catch(error) {
    res.json ({
        'error': 'No existe el id'
    })
}
})

router.post('/registrar',async (req, res) => {
    await EventoServices.insertEvento(req.body);
    res.json({
        'mensaje' : 'Registrado correctamente' 
    })
})

module.exports = router