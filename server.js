import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos de la carpeta dist (donde está tu build de React)
app.use(express.static(path.join(__dirname, 'dist')));

// La forma más segura para capturar todo sin errores de parámetros
// Esta sintaxis de expresión regular funciona en cualquier versión de Express
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor OneRedRD corriendo en puerto ${PORT}`);
});