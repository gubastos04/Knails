import Service from '../models/services.js';

// funções para acessar os dados dos serviços, utilizando o modelo Service para interagir com o banco de dados
const findAll = () => Service.find();

// função para buscar um serviço por ID, utilizando o serviceRepository para acessar os dados
const findById = (id) => Service.findById(id);


// função para criar um novo serviço, utilizando o serviceRepository para acessar os dados
const create = (data) => Service.create(data);

// função para atualizar um serviço existente, utilizando o serviceRepository para acessar os dados
const update = (id, data) => Service.findByIdAndUpdate(id, data, { new: true });


// função para deletar um serviço, utilizando o serviceRepository para acessar os dados
const remove = (id) => Service.findByIdAndDelete(id);

// exportando as funções do repositório para serem usadas no controller
export default { findAll, findById, create, update, remove };