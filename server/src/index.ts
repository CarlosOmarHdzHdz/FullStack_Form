import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase, sequelize } from './config/database';
import { FormEntry } from './models/FormEntry';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// --- AÑADE ESTAS LÍNEAS PARA DEPURACIÓN ---
console.log('DEBUG: process.env.DB_URL antes de conectar:', process.env.DB_URL);
// ------------------------------------------

// Conectar a la base de datos y sincronizar modelos al iniciar
connectDatabase();

// ... el resto de tu código ...