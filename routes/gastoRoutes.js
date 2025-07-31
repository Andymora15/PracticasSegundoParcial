const express = require('express');
const router = express.Router();
const gastoController = require('../controllers/gastoController');

router.post('/', gastoController.createGasto);
router.get('/', gastoController.getGastos);
router.get('/:id', gastoController.getGastoById);
router.put('/:id', gastoController.updateGasto);
router.delete('/:id', gastoController.deleteGasto);

module.exports = router;
