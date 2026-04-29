import serviceRepository from '../repositories/serviceRepository.js';

// controller para gerenciar os serviços, utilizando o serviceRepository para acessar os dados
const getAll = async (req, res) => {
  try {
    const services = await serviceRepository.findAll();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para buscar um serviço por ID, utilizando o serviceRepository para acessar os dados
const getById = async (req, res) => {
  try {
    const service = await serviceRepository.findById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service not found' });
    res.status(200).json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para criar um novo serviço, utilizando o serviceRepository para acessar os dados
const create = async (req, res) => {
  try {
    const newService = await serviceRepository.create(req.body);
    res.status(201).json(newService);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para atualizar um serviço existente, utilizando o serviceRepository para acessar os dados
const update = async (req, res) => {
  try {
    const updatedService = await serviceRepository.update(req.params.id, req.body);
    if (!updatedService) return res.status(404).json({ error: 'Service not found' });
    res.status(200).json(updatedService);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para deletar um serviço, utilizando o serviceRepository para acessar os dados
const remove = async (req, res) => {
  try {
    const deletedService = await serviceRepository.remove(req.params.id);
    if (!deletedService) return res.status(404).json({ error: 'Service not found' });
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// exportando as funções do controller para serem usadas nas rotas
export default { getAll, getById, create, update, remove };