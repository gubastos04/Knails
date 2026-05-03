import Professional from '../models/professionals.js';

// funções para acessar os dados dos profissionais, utilizando o modelo Professional para interagir com o banco de dados
const findAll = () => Professional.find();

// função para buscar um profissional por ID, utilizando o professionalRepository para acessar os dados
const findById = (id) => Professional.findById(id);


// função para criar um novo profissional, utilizando o professionalRepository para acessar os dados
const create = (data) => Professional.create(data);

// função para atualizar um profissional existente, utilizando o professionalRepository para acessar os dados
const update = (id, data) => Professional.findByIdAndUpdate(id, data, { new: true });


// função para deletar um profissional, utilizando o professionalRepository para acessar os dados
const remove = (id) => Professional.findByIdAndDelete(id);

// exportando as funções do repositório para serem usadas no controller
export default { findAll, findById, create, update, remove };