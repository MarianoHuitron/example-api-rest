const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number
});

module.exports = mongoose.model('usuario', usuarioSchema);

