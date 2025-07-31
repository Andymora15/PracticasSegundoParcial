const mongoose = require('mongoose');

const gastoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    gasto: { type: String, required: true },
    monto: { type: Number, required: true },
    informacion: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Gasto', gastoSchema);
