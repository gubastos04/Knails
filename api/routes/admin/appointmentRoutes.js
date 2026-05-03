import { Router } from 'express';
import appointmentController from '../../controllers/appointmentController.js';

// criando um roteador para as rotas relacionadas aos agendamentos
const router = Router();

// definindo as rotas para os agendamentos, utilizando as funções do appointmentController para lidar com as requisições

// rota para obter todos os agendamentos
router.get('/', appointmentController.getAll);

// rota para obter um agendamento específico por ID
router.get('/:id', appointmentController.getById);

// rota para criar um novo agendamento
router.post('/', appointmentController.create);

// rota para atualizar um agendamento existente por ID
router.put('/:id', appointmentController.update);

// rota para deletar um agendamento por ID
router.delete('/:id', appointmentController.remove);

// nova rota para atualizar o status de um agendamento por ID, utilizando a função updateStatus do appointmentController
router.patch('/:id/status', appointmentController.updateStatus);

export default router;