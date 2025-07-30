
const mongoose = require('mongoose');
const { Schema } = mongoose;

const GastosSchema = new Schema({
  nombre: { type: String, required: true },
  ruc: { type: String, required: true },
  correo: { type: String, required: true },
  pedido: { type: String, required: true },
  gasto: { type: String, required: true },
  monto: { type: Number, required: true },
  informacion: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Gasto', GastosSchema);
