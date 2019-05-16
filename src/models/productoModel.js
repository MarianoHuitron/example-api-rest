const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombreProducto: String,
    marca: String,
    precio: Number
});

module.exports = mongoose.model('producto',productoSchema);