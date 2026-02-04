const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Cualquier ruta que no sea de archivos, sirve el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor OneRedRD corriendo en puerto ${PORT}`);
});