import blockedDateRepository from '../repositories/blockedDateRepository.js';

// controller para gerenciar os dias bloqueados, utilizando o blockedDateRepository para acessar os dados
const getAll = async (req, res) => {
  try {
    const blockedDates = await blockedDateRepository.findAll();
    res.status(200).json(blockedDates);
  } catch (error) {
    console.error('Error fetching blocked dates:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para buscar um dia bloqueado por ID, utilizando o blockedDateRepository para acessar os dados
const getById = async (req, res) => {
  try {
    const blockedDate = await blockedDateRepository.findById(req.params.id);
    if (!blockedDate) return res.status(404).json({ error: 'Blocked date not found' });
    res.status(200).json(blockedDate);
  } catch (error) {
    console.error('Error fetching blocked date:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para criar um novo dia bloqueado, utilizando o blockedDateRepository para acessar os dados
const create = async (req, res) => {
  try {
    const newBlockedDate = await blockedDateRepository.create(req.body);
    res.status(201).json(newBlockedDate);
  } catch (error) {
    console.error('Error creating blocked date:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para atualizar um dia bloqueado existente, utilizando o blockedDateRepository para acessar os dados
const update = async (req, res) => {
  try {
    const updatedBlockedDate = await blockedDateRepository.update(req.params.id, req.body);
    if (!updatedBlockedDate) return res.status(404).json({ error: 'Blocked date not found' });
    res.status(200).json(updatedBlockedDate);
  } catch (error) {
    console.error('Error updating blocked date:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para deletar um dia bloqueado, utilizando o blockedDateRepository para acessar os dados
const remove = async (req, res) => {
  try {
    const deletedBlockedDate = await blockedDateRepository.remove(req.params.id);
    if (!deletedBlockedDate) return res.status(404).json({ error: 'Blocked date not found' });
    res.status(200).json({ message: 'Blocked date deleted successfully' });
  } catch (error) {
    console.error('Error deleting blocked date:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// exportando as funções do controller para serem usadas nas rotas
export default { getAll, getById, create, update, remove };