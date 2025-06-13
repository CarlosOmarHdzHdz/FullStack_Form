import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde .env

const app = express();
const port = process.env.PORT || 3000; // Usa el puerto de la variable de entorno o 3000

// Middleware
app.use(cors()); // Habilita CORS para permitir peticiones desde el frontend
app.use(express.json()); // Habilita el parsing de JSON en el cuerpo de las peticiones

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API del formulario funcionando!');
});

// Ruta para enviar el formulario
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Todos los campos son requeridos.' });
  }

  console.log('Formulario recibido:');
  console.log(`Nombre: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Mensaje: ${message}`);

  // Aquí podrías guardar los datos en una base de datos, enviar un email, etc.
  // Por ahora, solo enviaremos una respuesta de éxito.
  res.status(200).json({ message: 'Formulario enviado con éxito. ¡Gracias!' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});