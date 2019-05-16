const router = require('express-promise-router')();

const {
    index,
    nuevoProducto,
    getProduct,
    updateProducto,
    deleteProduct
} = require('../controllers/productoController');

router.get('/',index);
router.get('/:productId', getProduct);
router.post('/',nuevoProducto);
router.put('/:productId', updateProducto);
router.delete('/:produtId', deleteProduct);

module.exports = router;