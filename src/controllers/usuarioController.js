const Usuario = require('../models/usuarioModel');

module.exports = {
    index: async (req, res, next) => {
        const usuario = await Usuario.find({});
        res.status(200).json(usuario);
    },

    nuevoUsuario: async (req, res, next) => {
        if(Object.keys(req.body).length === 0) {
            res.send('Parametros no recividos')
        } else {
            const nuevoUsuario = new Usuario(req.body);
            const usuario = await nuevoUsuario.save();
            res.status(200).json(usuario);
        }      
    },

    getUser: async (req,res,next) => {
        const {userId} = req.params;
        const usuario = await Usuario.findById(userId);
        res.status(200).json(usuario);
    },

    updateUser: async (req,res,next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await Usuario.findByIdAndUpdate(userId,newUser);
        res.status(200).json({success: true});
    },

    deleteUser: async (req,res,next) => {
        const { userId } = req.params;
        await Usuario.findByIdAndRemove(userId);
        res.status(200).json({success: true});
    }
};

// hola