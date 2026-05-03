import { Router } from 'express';
import professionalController from '../../controllers/professionalController.js';

// criando um roteador para as rotas relacionadas aos profissionais
const router = Router();

// definindo as rotas para os profissionais, utilizando as funções do professionalController para lidar com as requisições

// rota para obter todos os profissionais
router.get('/', professionalController.getAll);

// rota para obter um profissional específico por ID
router.get('/:id', professionalController.getById);

// rota para criar um novo profissional
router.post('/', professionalController.create);

// rota para atualizar um profissional existente por ID
router.put('/:id', professionalController.update);

// rota para deletar um profissional por ID
router.delete('/:id', professionalController.remove);

export default router;