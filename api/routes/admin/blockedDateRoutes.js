import { Router } from 'express';
import blockedDateController from '../../controllers/blockedDateController.js';

// criando um roteador para as rotas relacionadas aos dias bloqueados
const router = Router();

// definindo as rotas para os dias bloqueados, utilizando as funções do blockedDateController para lidar com as requisições

// rota para obter todos os dias bloqueados
router.get('/', blockedDateController.getAll);

// rota para obter um dia bloqueado específico por ID
router.get('/:id', blockedDateController.getById);

// rota para criar um novo dia bloqueado
router.post('/', blockedDateController.create);

// rota para atualizar um dia bloqueado existente por ID
router.put('/:id', blockedDateController.update);

// rota para deletar um dia bloqueado por ID
router.delete('/:id', blockedDateController.remove);

export default router;