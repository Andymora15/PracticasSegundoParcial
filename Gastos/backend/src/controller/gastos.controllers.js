const Gasto = require('../models/gastos');
const gastosControllers = {};

// GET: Obtener todos los gastos
gastosControllers.getGastos = async (req, res) => {
  const gastos = await Gasto.find();
  res.json(gastos);
};

// GET: Obtener un gasto por ID
gastosControllers.getGastoById = async (req, res) => {
  try {
    const gasto = await Gasto.findById(req.params.id);
    if (!gasto) return res.status(404).json({ error: 'No encontrado' });
    res.json(gasto);
  } catch (err) {
    res.status(400).json({ error: 'ID inválido' });
  }
};

// POST: Crear un nuevo gasto
gastosControllers.addGastos = async (req, res) => {
  try {
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.json({ status: 'Gasto guardado', gasto });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT: Actualizar un gasto existente
gastosControllers.editGastos = async (req, res) => {
  try {
    const gasto = await Gasto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gasto) return res.status(404).json({ error: 'No encontrado' });
    res.json({ status: 'Gasto actualizado', gasto });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE: Eliminar un gasto
gastosControllers.deleteGastos = async (req, res) => {
  try {
    const gasto = await Gasto.findByIdAndDelete(req.params.id);
    if (!gasto) return res.status(404).json({ error: 'No encontrado' });
    res.json({ status: 'Gasto eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = gastosControllers;

