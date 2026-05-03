import professionalRepository from '../repositories/professionalRepository.js';

// controller para gerenciar os profissionais, utilizando o professionalRepository para acessar os dados
const getAll = async (req, res) => {
  try {
    const professionals = await professionalRepository.findAll();
    res.status(200).json(professionals);
  } catch (error) {
    console.error('Error fetching professionals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para buscar um profissional por ID, utilizando o professionalRepository para acessar os dados
const getById = async (req, res) => {
  try {
    const professional = await professionalRepository.findById(req.params.id);
    if (!professional) return res.status(404).json({ error: 'Professional not found' });
    res.status(200).json(professional);
  } catch (error) {
    console.error('Error fetching professional:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para criar um novo profissional, utilizando o professionalRepository para acessar os dados
const create = async (req, res) => {
  try {
    const newProfessional = await professionalRepository.create(req.body);
    res.status(201).json(newProfessional);
  } catch (error) {
    console.error('Error creating professional:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para atualizar um profissional existente, utilizando o professionalRepository para acessar os dados
const update = async (req, res) => {
  try {
    const updatedProfessional = await professionalRepository.update(req.params.id, req.body);
    if (!updatedProfessional) return res.status(404).json({ error: 'Professional not found' });
    res.status(200).json(updatedProfessional);
  } catch (error) {
    console.error('Error updating professional:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para deletar um profissional, utilizando o professionalRepository para acessar os dados
const remove = async (req, res) => {
  try {
    const deletedProfessional = await professionalRepository.remove(req.params.id);
    if (!deletedProfessional) return res.status(404).json({ error: 'Professional not found' });
    res.status(200).json({ message: 'Professional deleted successfully' });
  } catch (error) {
    console.error('Error deleting professional:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// exportando as funções do controller para serem usadas nas rotas
export default { getAll, getById, create, update, remove };