const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// iniciando el servidor
const app = express();

// conectado a la base de datos
mongoose.connect('mongodb://localhost/tienda-rest-api', {
    useNewUrlParser: true
}).then(db => console.log('BD Conectada'))
  .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/api/usuario', require('./routes/usuariosRoute'));
app.use('/api/producto', require('./routes/productosRoute'));


// escuchando el server
app.listen(app.get('port'), () => {
    console.log('Server on Port',app.get('port'));
})