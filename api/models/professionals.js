import mongoose from "mongoose";

// definindo o schema do profissional, com os campos name, email, phone e specialty, todos obrigatórios
const professionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true }],
  isActive: { type: Boolean, default: true },
})

export default mongoose.model("Professional", professionalSchema);