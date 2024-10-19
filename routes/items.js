const express = require('express');
const router = express.Router();

// Ejemplo de datos en memoria (temporal)
let items = [];

// Crear (Create) - POST
router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Leer todos los items (Read) - GET
router.get('/', (req, res) => {
  res.json(items);
});

// Leer un item por ID - GET
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find(i => i.id === parseInt(id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
});

// Actualizar (Update) - PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id === parseInt(id));
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
});

// Eliminar (Delete) - DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id === parseInt(id));
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item no encontrado' });
  }
});

module.exports = router;
