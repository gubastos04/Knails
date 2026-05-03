import mongoose from "mongoose";

// definindo o schema do agendamento, com os campos name, description, price e duration, todos obrigatórios
const scheduleSchema = new mongoose.Schema({
  professional: { type: mongoose.Schema.Types.ObjectId, ref: "Professional", required: true },
  dayOfWeek: { type: Number, required: true },
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  slotDuration: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
})

export default mongoose.model("Schedule", scheduleSchema);