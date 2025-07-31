const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const gastoRoutes = require('./routes/gastoRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB Atlas usando .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error de conexión:', err));

// Rutas
app.use('/gastos', gastoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
