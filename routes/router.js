const exp = require('express');
const router = exp.Router();
const controladorProducto = require('../src/controllers/producto.controllers');

router.get('/productos', controladorProducto.buscar)
router.get('/productos/:x', controladorProducto.buscarNombreProducto)
router.post('/productos', controladorProducto.crearProducto)




module.exports = router;