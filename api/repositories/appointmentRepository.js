import Appointment from '../models/appointments.js';

// funções para acessar os dados dos agendamentos, utilizando o modelo Appointment para interagir com o banco de dados
const findAll = () => Appointment.find();

// função para buscar um agendamento por ID, utilizando o appointmentRepository para acessar os dados
const findById = (id) => Appointment.findById(id);

// função para buscar agendamentos por telefone, utilizando o appointmentRepository para acessar os dados
const findByPhone = (phone) => Appointment.find({ clientPhone: phone });

// função para criar um novo agendamento, utilizando o appointmentRepository para acessar os dados
const create = (data) => Appointment.create(data);

// função para atualizar um agendamento existente, utilizando o appointmentRepository para acessar os dados
const update = (id, data) => Appointment.findByIdAndUpdate(id, data, { new: true });

// função para deletar um agendamento, utilizando o appointmentRepository para acessar os dados
const remove = (id) => Appointment.findByIdAndDelete(id);

// função para atualizar o status de um agendamento, utilizando o appointmentRepository para acessar os dados
const updateStatus = (id, status) => Appointment.findByIdAndUpdate(id, { status }, { new: true });


// exportando as funções do repositório para serem usadas no controller
export default { findAll, findById, findByPhone, create, update, remove, updateStatus };