import BlockedDate from '../models/blockedDates.js';

// funções para acessar os dados dos dias bloqueados, utilizando o modelo BlockedDate para interagir com o banco de dados
const findAll = () => BlockedDate.find();

// função para buscar um dia bloqueado por ID, utilizando o blockedDateRepository para acessar os dados
const findById = (id) => BlockedDate.findById(id);


// função para criar um novo dia bloqueado, utilizando o blockedDateRepository para acessar os dados
const create = (data) => BlockedDate.create(data);

// função para atualizar um dia bloqueado existente, utilizando o blockedDateRepository para acessar os dados
const update = (id, data) => BlockedDate.findByIdAndUpdate(id, data, { new: true });


// função para deletar um dia bloqueado, utilizando o blockedDateRepository para acessar os dados
const remove = (id) => BlockedDate.findByIdAndDelete(id);

// exportando as funções do repositório para serem usadas no controller
export default { findAll, findById, create, update, remove };