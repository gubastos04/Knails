import Schedule from '../models/schedules.js';

// funções para acessar os dados dos agendamentos, utilizando o modelo Schedule para interagir com o banco de dados
const findAll = () => Schedule.find();

// função para buscar um agendamento por ID, utilizando o scheduleRepository para acessar os dados
const findById = (id) => Schedule.findById(id);


// função para criar um novo agendamento, utilizando o scheduleRepository para acessar os dados
const create = (data) => Schedule.create(data);

// função para atualizar um agendamento existente, utilizando o scheduleRepository para acessar os dados
const update = (id, data) => Schedule.findByIdAndUpdate(id, data, { new: true });


// função para deletar um agendamento, utilizando o scheduleRepository para acessar os dados
const remove = (id) => Schedule.findByIdAndDelete(id);

// exportando as funções do repositório para serem usadas no controller
export default { findAll, findById, create, update, remove };