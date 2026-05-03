import express from 'express';
import adminAuth from './middlewares/adminAuth.js';

import serviceRoutes from './routes/public/serviceRoutes.js';
import publicAppointmentRoutes from './routes/public/publicAppointmentRoutes.js';
import professionalRoutes from './routes/public/professionalRoutes.js';

import blockedDateRoutes from './routes/admin/blockedDateRoutes.js';
import scheduleRoutes from './routes/admin/scheduleRoutes.js';
import appointmentRoutes from './routes/admin/appointmentRoutes.js';


// criando a aplicação Express
const app = express();

// middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// ✅ Públicas — cliente acessa
app.use('/services', serviceRoutes);
app.use('/professionals', professionalRoutes);
app.use('/appointments', publicAppointmentRoutes);

// ✅ Protegidas — só admin acessa
app.use('/admin/appointments', adminAuth, appointmentRoutes);
app.use('/admin/schedules', adminAuth, scheduleRoutes);
app.use('/admin/blockedDates', adminAuth, blockedDateRoutes);

// exporatando a aplicação para ser usada no server.js
export default app;