const Amigo = require('../models/Amigo.js')

exports.getAllAmigos = async() => {
    return await Amigo.find()
}

exports.getAmigoById = async(id) => {
    return await Amigo.findById(id)
}

exports.insertAmigo = async(data) => {
    let amigo = new Amigo(data);
    return await amigo.save();
}