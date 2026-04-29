import mongoose from "mongoose";

// definindo o schema do agendamento, com os campos name, description, price e duration, todos obrigatórios
const appointmentSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  professional: { type: mongoose.Schema.Types.ObjectId, ref: "Professional", required: true },
  clientName: { type: String, required: true },
  clientPhone: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
})

export default mongoose.model("Appointment", appointmentSchema);