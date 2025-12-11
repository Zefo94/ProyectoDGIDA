const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
require('dotenv').config();

const app = express();

// 1. Conectar Base de Datos
connectDB();

// 2. Middlewares
app.use(cors()); 
app.use(express.json());

// 3. Ruta Base (Evita error 404 en raíz)
app.get('/', (req, res) => {
  res.json({ success: true, msg: 'API DGIDA Online v1.0', status: 'OK' });
});

// 4. Rutas de la API
app.use('/api/v1/auth', require('./src/routes/auth'));
app.use('/api/v1/instituciones', require('./src/routes/institutions'));
app.use('/api/v1/programas', require('./src/routes/programs'));
app.use('/api/v1/proyectos', require('./src/routes/projects'));
app.use('/api/v1/tramites', require('./src/routes/procedures'));

// 5. Manejo de Errores Global (JSON, NO HTML)
app.use((req, res) => {
  res.status(404).json({ success: false, msg: 'Ruta no encontrada (404). Verifique la URL y el método HTTP.' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, msg: 'Error interno del servidor', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));