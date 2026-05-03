import appointmentRepository from '../repositories/appointmentRepository.js';

// controller para gerenciar os agendamentos, utilizando o appointmentRepository para acessar os dados
const getAll = async (req, res) => {
  try {
    const appointments = await appointmentRepository.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// função para buscar um serviço por ID, utilizando o serviceRepository para acessar os dados
const getById = async (req, res) => {
  try {
    const appointment = await appointmentRepository.findById(req.params.id);
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
    res.status(200).json(appointment);
  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// função para buscar agendamentos por telefone, utilizando o appointmentRepository para acessar os dados
const getByPhone = async (req, res) => {
  try {
    const appointments = await appointmentRepository.findByPhone(req.query.phone);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// função para criar um novo agendamento, utilizando o appointmentRepository para acessar os dados
const create = async (req, res) => {
  try {
    const newAppointment = await appointmentRepository.create(req.body);
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// função para atualizar um agendamento existente, utilizando o appointmentRepository para acessar os dados
const update = async (req, res) => {
  try {
    const updatedAppointment = await appointmentRepository.update(req.params.id, req.body);
    if (!updatedAppointment) return res.status(404).json({ error: 'Appointment not found' });
    res.status(200).json(updatedAppointment);
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// função para deletar um agendamento, utilizando o appointmentRepository para acessar os dados
const remove = async (req, res) => {
  try {
    const deletedAppointment = await appointmentRepository.remove(req.params.id);
    if (!deletedAppointment) return res.status(404).json({ error: 'Appointment not found' });
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// nova função para cancelar um agendamento, utilizando o appointmentRepository para acessar os dados
const cancel = async (req, res) => {
  try {
    const appointment = await appointmentRepository.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    // ✅ Verificação de dono
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    if (appointment.clientPhone !== phone) {
      return res.status(403).json({ error: 'You are not allowed to cancel this appointment' });
    }

    // ✅ Verificação de status
    if (appointment.status === 'completed') {
      return res.status(400).json({ error: 'Cannot cancel a completed appointment' });
    }

    if (appointment.status === 'cancelled') {
      return res.status(400).json({ error: 'Appointment is already cancelled' });
    }

    const updated = await appointmentRepository.updateStatus(req.params.id, 'cancelled');
    res.status(200).json(updated);
  } catch (error) {
    console.error('Error cancelling appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// nova função para atualizar o status de um agendamento, utilizando o appointmentRepository para acessar os dados
const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['confirmed', 'completed', 'cancelled'];

    if (!allowed.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const updated = await appointmentRepository.updateStatus(req.params.id, status);
    if (!updated) return res.status(404).json({ error: 'Appointment not found' });

    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// exportando as funções do controller para serem usadas nas rotas
export default { getAll, getById, getByPhone, create, update, remove, cancel, updateStatus };