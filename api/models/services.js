import mongoose from "mongoose";

// definindo o schema do serviço, com os campos name, description, price e duration, todos obrigatórios
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
})

export default mongoose.model("Service", serviceSchema);