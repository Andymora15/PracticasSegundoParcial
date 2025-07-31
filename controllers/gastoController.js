const Gasto = require('../models/Gasto');

// Crear gasto
exports.createGasto = async (req, res) => {
    try {
        const gasto = new Gasto(req.body);
        await gasto.save();
        res.status(201).json(gasto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los gastos
exports.getGastos = async (req, res) => {
    try {
        const gastos = await Gasto.find();
        res.json(gastos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener gasto por ID
exports.getGastoById = async (req, res) => {
    try {
        const gasto = await Gasto.findById(req.params.id);
        if (!gasto) return res.status(404).json({ error: 'No encontrado' });
        res.json(gasto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar gasto
exports.updateGasto = async (req, res) => {
    try {
        const gasto = await Gasto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!gasto) return res.status(404).json({ error: 'No encontrado' });
        res.json(gasto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar gasto
exports.deleteGasto = async (req, res) => {
    try {
        const gasto = await Gasto.findByIdAndDelete(req.params.id);
        if (!gasto) return res.status(404).json({ error: 'No encontrado' });
        res.json({ mensaje: 'Eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
