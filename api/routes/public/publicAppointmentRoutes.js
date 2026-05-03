import { Router } from 'express';
import appointmentController from '../../controllers/appointmentController.js';

const router = Router();

router.get('/',          appointmentController.getByPhone);  // consulta por telefone
router.post('/',         appointmentController.create);      // cria agendamento
router.patch('/:id/cancel', appointmentController.cancel);  // ← novo endpoint para cancelar agendamento

export default router;