import { Router } from 'express';
import serviceController from '../../controllers/serviceController.js';

// criando um roteador para as rotas relacionadas aos serviços
const router = Router();

// definindo as rotas para os serviços, utilizando as funções do serviceController para lidar com as requisições

// rota para obter todos os serviços
router.get('/', serviceController.getAll);

// rota para obter um serviço específico por ID
router.get('/:id', serviceController.getById);

// rota para criar um novo serviço
router.post('/', serviceController.create);

// rota para atualizar um serviço existente por ID

router.put('/:id', serviceController.update);

// rota para deletar um serviço por ID
router.delete('/:id', serviceController.remove);

export default router;