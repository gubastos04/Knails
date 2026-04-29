import express from 'express';
import serviceRoutes from './routes/serviceRoutes.js';

// criando a aplicação Express
const app = express();

// middleware para parsear o corpo das requisições como JSON
app.use(express.json());
app.use('/services', serviceRoutes);

// exportando a aplicação para ser usada no server.js
export default app;