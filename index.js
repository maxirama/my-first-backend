const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar y usar las rutas de "items"
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Hola, API CRUD!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
