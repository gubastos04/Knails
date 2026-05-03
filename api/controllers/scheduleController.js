import scheduleRepository from '../repositories/scheduleRepository.js';

// controller para gerenciar os agendamentos, utilizando o scheduleRepository para acessar os dados
const getAll = async (req, res) => {
  try {
    const schedules = await scheduleRepository.findAll();
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para buscar um agendamento por ID, utilizando o scheduleRepository para acessar os dados
const getById = async (req, res) => {
  try {
    const schedule = await scheduleRepository.findById(req.params.id);
    if (!schedule) return res.status(404).json({ error: 'Schedule not found' });
    res.status(200).json(schedule);
  } catch (error) {
    console.error('Error fetching schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para criar um novo agendamento, utilizando o scheduleRepository para acessar os dados
const create = async (req, res) => {
  try {
    const newSchedule = await scheduleRepository.create(req.body);
    res.status(201).json(newSchedule);
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para atualizar um agendamento existente, utilizando o scheduleRepository para acessar os dados
const update = async (req, res) => {
  try {
    const updatedSchedule = await scheduleRepository.update(req.params.id, req.body);
    if (!updatedSchedule) return res.status(404).json({ error: 'Schedule not found' });
    res.status(200).json(updatedSchedule);
  } catch (error) {
    console.error('Error updating schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// função para deletar um agendamento, utilizando o scheduleRepository para acessar os dados
const remove = async (req, res) => {
  try {
    const deletedSchedule = await scheduleRepository.remove(req.params.id);
    if (!deletedSchedule) return res.status(404).json({ error: 'Schedule not found' });
    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// exportando as funções do controller para serem usadas nas rotas
export default { getAll, getById, create, update, remove };