const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const amigo = new Schema({
    nombre : String,
    telefono : String,
    cumpleanos : String
});
module.exports = mongoose.model('amigos',amigo);