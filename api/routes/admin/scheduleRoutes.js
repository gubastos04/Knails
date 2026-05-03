import { Router } from 'express';
import scheduleController from '../../controllers/scheduleController.js';

// criando um roteador para as rotas relacionadas aos agendamentos
const router = Router();

// definindo as rotas para os agendamentos, utilizando as funções do scheduleController para lidar com as requisições

// rota para obter todos os agendamentos
router.get('/', scheduleController.getAll);

// rota para obter um agendamento específico por ID
router.get('/:id', scheduleController.getById);

// rota para criar um novo agendamento
router.post('/', scheduleController.create);

// rota para atualizar um agendamento existente por ID
router.put('/:id', scheduleController.update);

// rota para deletar um agendamento por ID
router.delete('/:id', scheduleController.remove);

export default router;