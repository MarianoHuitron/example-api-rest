const Producto = require('../models/productoModel');

module.exports = {
    index: async (req, res, next) => {
        const producto = await Producto.find({});
        res.status(200).json(producto);
    },

    nuevoProducto: async (req,res,next) => {
        if(Object.keys(req.body).length === 0) {
            res.send('Parametros no recividos');
        } else {
            const nuevoProducto = new Producto(req.body);
            const producto = await nuevoProducto.save();
            res.status(200).json(producto);
        }
    },

    getProduct: async (req,res,next) => {
        const {productId} = req.params;
        const producto = await Producto.findById(productId);
        res.status(200).json(producto);
    },

    updateProducto: async (req,res,next) => {
        const { productId } = req.params;
        const newProduct = req.body;
        const oldProduct = await Producto.findByIdAndUpdate(productId,newProduct);
        res.status(200).json({success: true});
    },

    deleteProduct: async (req,res,next) => {
        const { productId } = req.params;
        await Producto.findByIdAndRemove(productId);
        res.status(200).json({success: true});
    }
}