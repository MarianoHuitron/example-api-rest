const router = require('express-promise-router')();

const {
    index,
    nuevoUsuario,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/usuarioController');

// obtener todos 
router.get('/', index);
// obtener un usuario 
router.get('/:userId', getUser);
// agregar nuevo usuario
router.post('/', nuevoUsuario);
// actualizar usuario
router.put('/:userId', updateUser);
// eliminar usuario
router.delete('/:userId', deleteUser);


module.exports = router;