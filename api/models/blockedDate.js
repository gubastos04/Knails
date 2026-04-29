import mongoose from "mongoose";
import professional from "./professional";

// definindo o schema do dia bloqueado, com os campos name, description, price e duration, todos obrigatórios
const blockedDateSchema = new mongoose.Schema({
  professional: { type: mongoose.Schema.Types.ObjectId, ref: "Professional", required: true },
  date: { type: Date, required: true },
  reason: { type: String, required: true },
})

export default mongoose.model("BlockedDate", blockedDateSchema);