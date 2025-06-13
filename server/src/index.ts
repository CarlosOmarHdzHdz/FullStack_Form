import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase, sequelize } from './config/database';
import { FormEntry } from './models/FormEntry';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDatabase(); // Conecta a la base de datos al iniciar la app

app.get('/', (req, res) => {
  res.send('API del formulario funcionando con base de datos!');
});

app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Todos los campos son requeridos.' });
  }

  try {
    const newEntry = await FormEntry.create({ name, email, message });
    console.log('Formulario recibido y guardado:', newEntry.toJSON());
    res.status(200).json({ message: 'Formulario enviado y guardado con éxito. ¡Gracias!' });
  } catch (error: any) {
    console.error('Error al guardar el formulario en la base de datos:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Este email ya ha sido registrado.' });
    }
    res.status(500).json({ message: 'Error interno del servidor al guardar el formulario.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});